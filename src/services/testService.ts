import * as testRepository from "../repositories/testRepository.js"

interface insertTestInput {
    name : string, 
    pdfUrl: string, 
    categoryName: string, 
    disciplineId: number, 
    teacherId: number
}

export async function registerTest(data : insertTestInput) {
  const {name, pdfUrl, categoryName, disciplineId, teacherId} = data;
  const categoryId = await testRepository.getCategoryIdByCategoryName(categoryName);
  const teacherDisciplineId = await verifyTeacherDisciplineExistance(teacherId, disciplineId);
  const insertInDb = {name, pdfUrl, categoryId, teacherDisciplineId}
  testRepository.insertTest(insertInDb)
}

async function verifyTeacherDisciplineExistance(teacherId: number, disciplineId: number) {
  const result = await testRepository.getTeacherDisciplineByTeacherAndDisciplineIds(teacherId, disciplineId);
  if (!result) {
    throw {
      status: 404,
      type: 'not found',
      message: 'This teacher is not associated with this subject, please double check the input'
    }
  }
  return result.id
}