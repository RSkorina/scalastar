package NameHashing

trait NameHash {
  def hash(): String = ???
  def prepareString(input: String): String =  input.replaceAll("[^A-Za-z()\\[\\]]", "").toLowerCase()
}

