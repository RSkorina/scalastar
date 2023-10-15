package frontEnd
import Translations.DefaultLang
import NameHashing.OriginalNameHash
import NameHashing.IrreversableHash


object FrontEnd {
  
  def initiation(): Unit = {
    val translation = new DefaultLang()
    val hashing = new IrreversableHash()


    println(translation.drum_roll)
    println(translation.first_name)
    val firstName = scala.io.StdIn.readLine()
    println(translation.last_name)
    val lastName = scala.io.StdIn.readLine()
    // Call last na
    val catName = hashing.hash(firstName, lastName)

    println(s"Hello future cat:  $catName")
  }
}
