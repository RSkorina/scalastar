package NameHashing
import scala.io.Source

class IrreversableHash extends NameHash{	
  
  def hash(firstName: String, lastName: String): String = {


    val fileNamePrefix = "data/prefix_canon.txt"
    val fileNameSuffix = "data/suffix_canon.txt"

    val arrayOfPrefix: Array[String] = Source.fromFile(fileNamePrefix).getLines().toArray
    val arrayOfSuffix: Array[String] = Source.fromFile(fileNameSuffix).getLines().toArray

    val prefix = hashString(prepareString(firstName), arrayOfPrefix)
    val suffix = hashString(prepareString(lastName), arrayOfSuffix)
    return s"$prefix$suffix"
  }

  // could consider making this a lift
  def hashString(inputName: String, listResponses: Array[String]): String = {
    val salt: Int = (inputName.length() * 9) % listResponses.length
    var baseNumber: Int = salt
    for ((c) <- inputName){
      baseNumber = (baseNumber * (c.toInt - 94)) % listResponses.length
      if (baseNumber == 0) { baseNumber = 1} // avoid problems with list ending
    }
    return listResponses(baseNumber)

  }
}
