package NameHashing

class OriginalNameHash extends NameHash{
      																									

    val firstNameDictionary = Map(
        "a" -> "hawk",
        "b" -> "tangle",
        "c" -> "wild",
        "d" -> "swift",
        "e" -> "rain",
        "f" -> "thorn",
        "g" -> "fuzzy",
        "h" -> "mud",
        "i" -> "loud",
        "j" -> "bramble",
        "k" -> "moss",
        "l" -> "leopard",
        "m" -> "scar",
        "n" -> "bright",
        "o" -> "running",
        "p" -> "sand",
        "q" -> "dawn",
        "r" -> "ice",
        "s" -> "spotted",
        "t" -> "rock",
        "u" -> "red",
        "v" -> "mouse",
        "w" -> "tiger",
        "x" -> "flower",
        "y" -> "claw",
        "z" -> "blue",
    )
																									
    val lastNameDictionary = Map(
        "a" -> "fire",
        "b" -> "claw",
        "c" -> "talon",
        "d" -> "eyes",
        "e" -> "fur",
        "f" -> "tail",
        "g" -> "mask",
        "h" -> "face",
        "i" -> "storm",
        "j" -> "foot",
        "k" -> "ears",
        "l" -> "pelt",
        "m" -> "nose",
        "n" -> "heart",
        "o" -> "belly",
        "p" -> "shadow",
        "q" -> "flower",
        "r" -> "breath",
        "s" -> "path",
        "t" -> "legs",
        "u" -> "sky",
        "v" -> "pool",
        "w" -> "head",
        "x" -> "wish",
        "y" -> "stalker",
        "z" -> "sayer",
    )
  
  def hash(firstName: String, lastName: String): String = {
    var prefix = firstNameDictionary(prepareString(firstName).take(1)).capitalize
    var sufix = lastNameDictionary(prepareString(lastName).take(1))

    return s"$prefix$sufix"
  }
}
