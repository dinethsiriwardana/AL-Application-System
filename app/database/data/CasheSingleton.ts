class CasheSingleton {
  private static instance: CasheSingleton;

  private studentList: number[] = [];

  private constructor() {
    // Initialization logic here
  }

  public static getInstance(): CasheSingleton {
    if (!CasheSingleton.instance) {
      CasheSingleton.instance = new CasheSingleton();
    }

    return CasheSingleton.instance;
  }

  // Example method
  public someMethod(): void {
    console.log("Singleton method called");
  }

  public addStudent(student: []): void {
    this.studentList = student;
  }

  public getStudent(): Number[] {
    return this.studentList;
  }
}

export { CasheSingleton };
