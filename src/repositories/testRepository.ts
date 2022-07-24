import prisma from "../config/database.js"

interface testInsertData {
    name : string, 
    pdfUrl: string, 
    categoryId: number, 
    disciplineId: number, 
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