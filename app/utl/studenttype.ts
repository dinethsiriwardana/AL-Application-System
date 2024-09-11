import { CasheSingleton } from "@/app/database/data/CasheSingleton";
import dbConnect from "@/app/database/database";
import StudentList from "@/app/models/student_list";

async function StudentType(index: string): Promise<boolean> {
  try {
    const cache = CasheSingleton.getInstance();

    if (cache.getStudent().length === 0) {
      console.log("No student in the cache");
      await dbConnect();
      const studentList = await StudentList.find({});
      cache.addStudent(studentList[0].indexno);
    }

    const studentList = cache.getStudent();

    if (studentList.includes(parseInt(index))) {
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export { StudentType };
