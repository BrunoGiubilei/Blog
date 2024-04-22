class Utils {

  get getDate(): string {
    let date = new Date();
    return date.getDate() + "/" + date.getMonth().toString().padStart(2, '0') + "/" + date.getFullYear()
  }
}

export default Utils;