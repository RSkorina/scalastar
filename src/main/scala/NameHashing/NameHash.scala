package NameHashing

trait NameHash {
  def hash(): String = ???
  def HashType(): Unit = ???//See how we deal with this in a sec
  def prepareString(input: String): String = {
    val test =  input.replaceAll("[^A-Za-z()\\[\\]]", "").toLowerCase()
    println(test)
    print("testHERE")
    return test
  } 
}

