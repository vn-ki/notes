
[_metadata_title]:- "Networking - Beej's Guide"
[_metadata_date]:- "2019-01-30"
[_metadata_tags]:- "networking"


# Networking - [Beej's guide](http://beej.us/guide/bgnet/)

## Intro: What is a socket?

- Everything is a file => everything is a file descriptor.
- File descriptor - an intefer associated with an open file.
- File can be anything - a network connection, a FIFO, a pipe, a terminal, a real file, etc;
- To make a network file descriptor: `socket()` system routine
  - Return socket descriptor
  - Communicate through `send()` and `recv` (see `man`)
  - You can use `read()` and `write`, but harder

### Two types of sockets

- Types
  - Stream sockets: `SOCK_STREAM`
  - Datagram sockets: `SOCK_DGRAM`
- Stream sockets uses TCP. 
 - TCP ensures data arrives sequentially and error-free.
 
- Datagram sockets use UDP. The packets may arrive and they may arrive out of order.
    - Called connectionless because don't need to maintain an open connection like stream sockets.
    - Used by tftp, dhcpd, Multiplayer games, audio streaming, video conferening.
    - In the case tftp and dhcpd have protocol on top of UDP. 
        - Ex: tftp send `ACK` (Acknowdge) packet on receiving. If server doesnt recevie ACK, server resends packet.

Note: read section 2.2

## IP Addresses, structs and data munging

### 3.1 IPv4 and IPv6
Read if you want. History of IP.

IPv6: Hexadec repr, 2 bytes seperated by `:` colon.

- In IPv6 you can leave out leading zeros
- Following are equal
    ```
    2001:0db8:c9d2:0012:0000:0000:0000:0051
    2001:db8:c9d2:12::51

    2001:0db8:ab00:0000:0000:0000:0000:0000
    2001:db8:ab00::

    0000:0000:0000:0000:0000:0000:0000:0001
    ::1
    ```

- loopback(IPv6): ::1
- IPv6 compatibility mode: `::ffff:192.0.2.33` = `192.0.2.33` in IPv4

### 3.2 Byte Order

-  Two kinds of byte order:
  - Big-Endian (aka Network Byte order)
  - Little-Endian (aka Host Byte Order): (HBO is lil-endian usually for intel)
- Functions present to convert HBO to NBO and vice-versa
  - Two types of nums to convert:
    - short: 2 bytes
    - long: 4 bytes
      ```
      htons() host to network short

      htonl() host to network long

      ntohs() network to host short

      ntohl() network to host long
      ```
  - Above only for 32-bit
