import NameHashing.OriginalNameHash

class OriginalNameHashTest extends org.scalatest.funsuite.AnyFunSuite {
  test("IrreversableHash.hash") {
    val testHash = new OriginalNameHash()
    assert(testHash.hash("rus", "ty") === "Icelegs")
  }
}
