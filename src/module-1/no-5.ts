export function nameInitial(fullname: string) {
  const fullnameArray = fullname.split(" ")
  let initial = ""

  fullnameArray.map((element) => {
    initial += element.charAt(0)
  })

  console.log(initial)
}
