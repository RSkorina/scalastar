import NameHashing.IrreversableHash

class IrreversableHashTest extends org.scalatest.funsuite.AnyFunSuite {
  test("IrreversableHash.hash") {
    val testHash = new IrreversableHash()
    assert(testHash.hash("rus", "ty") === "Troutear")
  }
}
