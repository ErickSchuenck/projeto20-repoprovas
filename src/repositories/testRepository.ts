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

export async function getDisciplineIdByDisciplineName(discipline: string) {
    const result = await prisma.disciplines.findFirst({where: {
        name: discipline
    }})
    return result.id
}



export async function getAllTests(){
    const tests = await prisma.tests.findMany();
    return tests
}

export async function getTestsByDiscipline() {
    const tests = await prisma.terms.findMany({
        include: {
            disciplines: {
                include: {
                    teachersDisciplines: {
                        select: {
                            teachers: true,
                            tests: {
                                select: {
                                    id: true,
                                    name: true,
                                    pdfUrl: true,
                                    categories:{
                                        select:{
                                            id: true,
                                            name:true,                                           
                                        }
                                    }
                                }
                            },
                        }
                    }
                }
            }
        }
    });
    return { tests }
}

export async function getTestsByTeacher() {
    const tests = await prisma.teachersDisciplines.findMany({
        include:{
            disciplines:{
                include:{
                    teachersDisciplines:{
                        select:{
                            id: true,
                            teacherId: true,
                            disciplineId: true,
                            tests:{
                                select:{
                                    id: true,
                                    name: true
                                }
                            }
                        }
                    }
                }
            },
            tests:{
                include:{
                    categories:{
                        select:{
                            id: true,
                            name: true
                        }
                    }
                }
            },
            teachers:{
                select:{
                    id: true,
                    name: true,
                }
            },
        }
    });

    return { tests }
}

export async function getTest(name : string) {
    const result = await prisma.tests.findFirst({where: {
        name
    }});
    return result
}