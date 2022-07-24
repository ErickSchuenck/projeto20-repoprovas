import * as testRepository from "../repositories/testRepository.js"

interface insertTestInput {
    name : string, 
    pdfUrl: string, 
    categoryName: string, 
    disciplineId: number, 
    teacherId: number
}

export async function registerTest(data : insertTestInput) {
  
}