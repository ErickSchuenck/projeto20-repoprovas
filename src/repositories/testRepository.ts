import prisma from "../config/database.js"

interface testInsertData {
    name : string, 
    pdfUrl: string, 
    categoryId: number,
    teacherDisciplineId: number
}

export async function getTestFromDb(name : string){
  const result = await prisma.tests.findUnique({where: {name}})
  return result
}

export async function insertTest(data : testInsertData) {
  const {name, pdfUrl,categoryId, teacherDisciplineId } = data
  await prisma.tests.create({
        data:{
            name,
            pdfUrl,
            categoryId,
            teacherDisciplineId
        }
    });
}

export async function getCategoryIdByCategoryName(categoryName : string){
  const result = await prisma.categories.findFirst({
        where:{
            name:{
                startsWith: categoryName,
                mode: 'insensitive'
            }
        }
  });
  return result.id
}

export async function getTeacherDisciplineByTeacherAndDisciplineIds(teacherId: number, disciplineId: number) {
  const result = await prisma.teachersDisciplines.findFirst({
        where: {
            teacherId,
            disciplineId
        }
    });
    return result;
}