// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyNFT is ERC721URIStorage,Ownable{
    using Counters for Counters.Counter;
    constructor() ERC721("Krishna","Kanha"){}
    Counters.Counter private tokenid;
    function mintNFT(address recipient,string memory tokenURI) public onlyOwner returns(uint256)
    {
      tokenid.increment();

      uint256 NFTid=tokenid.current();
      _mint(recipient,NFTid);
      _setTokenURI(NFTid,tokenURI);
      return NFTid;
    }
}
