//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    bool hasFavNbr = true;
    uint public favNbr = 123;
    string favNbrStr = "Five";
    int256 x = -3000;
    address myAddr = 0xd9145CCE52D386f254917e481eB44e9943F39138;
    bytes32 faveBytes = "cat";
    struct People {
        uint256 favnum;
        string name;
    }
    People public person = People({favnum: 2, name: "abdo"});
    People[] public peopoles;
    mapping(string => uint256) public nameToFaveNbr;

    function store(uint256 _favoriteNumber) public virtual {
        favNbr = _favoriteNumber;
        favNbr = _favoriteNumber + 1;
    }

    function retrieve() public view returns (uint256) {
        return favNbr;
    }

    function modify() public pure returns (uint256) {
        return 1 + 1;
    }

    function addPerson(string memory _name, uint256 _favenum) public {
        peopoles.push(People(_favenum, _name));
        nameToFaveNbr[_name] = _favenum;
    }
}
