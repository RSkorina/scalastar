import { irreversableHash } from "./irreversableHash";
test('return a valid warrior cat name', () =>{
    expect(irreversableHash({firstName: 'Rusty', lastName: 'Cat'})).toBe("Blossomclaw");
    expect(irreversableHash({firstName: 'Princess', lastName: 'Cat'})).toBe("Jumpclaw");
    expect(irreversableHash({firstName: 'Midnight', lastName: 'Badger'})).toBe("Hopstone");
});