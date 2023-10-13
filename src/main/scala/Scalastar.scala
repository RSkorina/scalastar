package runtime

import frontEnd.FrontEnd

object Scalastar {
  def main(args: Array[String]): Unit = start() 

  def start(): Unit =  {
    FrontEnd.initiation();

  }
}


