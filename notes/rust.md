
[_metadata_title]:- "Rust"
[_metadata_date]:- "2019-02-03"
[_metadata_tags]:- "rust"

# Rust: [The Book](https://doc.rust-lang.org/book/)

## Introduction

### Data types

```rust
fn main() {
    let mut x = 5;
    println!("The value of x is: {}", x);
    x = 6;
    println!("The value of x is: {}", x);
}
```

- All variables immutable by default :)

- Variable shadowing available.
    ```rust
      let x = 5;

      let x = x + 1;

      let x = x * 2;
    ```
- Interger literals

| Number literals | Example      |
| ----------------|---------     |
| Hex             | `0xff`       |
| Octal           | `0o77`       |
| Binary          | `0b1111_0000`|
| Byte (u8 only)  | `b'A'`       |

```rust
fn main() {
  let x = 5;
  let x: i16 = 5;

  let guess: u32 = "42".parse().expect("Not a number!"); // Have to have a type
}
```

- `char`
    ```rust
    let c = 'z';
    ```
- Componud types
  - Tuple
      ```rust
      fn main() {
          let tup: (i32, f64, u8) = (500, 6.4, 1);
          let tup = (500, 6.4, 1);
          let (x, y, z) = tup;
          let nice = x.0;
      }
      ```
  - Array
      ```rust
      fn main() {
          let a = [1, 2, 3, 4, 5];
          let a: [i32; 5] = [1, 2, 3, 4, 5];
      }
      ```

### Functions

#### Expressions

```rust
fn main() {
  let x = 5;

  let y = { // This is an expressions
    let x = 3;
    x + 1
  }
}
```

#### Ordinary function

```rust
fn lol() {
  let x = 3;
}
```

#### Functions with return values

```rust
fn returned(u: i32) -> i32 {
  u + 1
}

fn wont_compile(u: i32) -> i32 {
  u + 1;  // won't compile remove semicolon
}
```

## Control flow

If is an expression.

### `if-let`

```rust
    let number = if condition {
        5
    } else {
        6
    };
```

### `loop`

```rust
    let result = loop {
        counter += 1;

        if counter == 10 {
            break counter * 2;
        }
    };
```

They have `for` and `while` too.

## Ownership

> The most unique rust feature.

