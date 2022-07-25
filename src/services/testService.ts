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
  await verifyTestUniqueness(name)
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

export async function getAllTestsBy(property : "disciplines" | "teachers") {
  let response = {};
  if (property === "disciplines"){
    response = await testRepository.getTestsByDiscipline()
  }
  else {
    response = testRepository.getTestsByTeacher()
  }
  return response
}

async function verifyTestUniqueness(name : string) {
  const result = await testRepository.getTest(name)
  if (result){
    throw {
      status: 400,
      type: 'bad request',
      message: 'This test already exists'
    }
  }
}