
[_metadata_title]:- "Rust"
[_metadata_date]:- "2019-02-03"
[_metadata_tags]:- "rust"

# Rust: [The Book](https://doc.rust-lang.org/book/)

## Introduction

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

