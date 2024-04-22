function initialName(name: string): string {
  let splittedName: string[] = name.split(" ");

  let initial: string = "";
  splittedName.forEach((element) => {
    initial += element[0];
  });

  return initial.toUpperCase();
}

export default initialName;
