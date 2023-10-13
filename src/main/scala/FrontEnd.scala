package frontEnd

import translations.DefaultLang

object FrontEnd {
  
  def initiation(): Unit = {
    val translation = new DefaultLang()

    println(translation.drum_roll)
    println(translation.first_name)
    val firstName = scala.io.StdIn.readLine()
    println(translation.last_name)
    val lastName = scala.io.StdIn.readLine()
    // Call last na
    println(s"Hello future cat:  $firstName $lastName")
  }
}
