---
title: "A note on a note on mechanistic interpretability, variables, and importance of interpretable bases"
date: 2024-07-17
aliases:
  - "Daily-Notes/Mech-Interp,-Variables,-Interpretable-Bases"
---

These notes are notes on Chris Olah’s [Mechanistic Interpretability, Variables, and the Importance of Interpretable Bases](https://www.transformer-circuits.pub/2022/mech-interp-essay) **:)**

- Olah presents an analogy between regular computer programs and neural networks
  - reverse engineering ←→ mechanistic interpretability
  - program binary ←→ network parameters
  - vm/processor/interpreter ←→ network architecture
  - program state/memory ←→ layer representations/activations
  - variable/memory location ←→ neuron/feature direction
- **Argument**: Questions hard to answer for reverse engineering neural networks become easier to answer if you pose the same question for reverse engineering regular computer programs and the answers can transfer back to the neural network case.
  - So understanding variables in a computer program is analogous to finding and understanding interpretable neurons — this makes it a central task not just an interesting question to ask for reverse engineering NNs.
- **Attacking the Curse of Dimensionality** —
  - NNs have high-dim input spaces.
  - The n-dim volume of the input space grows exponentially as n increases — this is the curse of dimensionality. It is hard to learn functions without a lot of data considering the high dim space.
  - **For interpretability** → How can we understand a function over this large space, without taking an exponential amount of time?
    - An approach is to study NNs with low-dim inputs for easier understanding (this relies on the assumption that the behavior in low-dims can transferred to high-dims)
    - Another approach is to study NNs in a neighborhood around an individual data point of interest (answered by saliency maps)
  - For regular computer programs, the code gives a non-exponential description of the program’s behavior which is why we can understand the behavior of the code while reverse engineering it. This is an alternative to understanding the program as a function over a huge input space.
    - In the context of NNs, parameters are a finite description of the network. These parameters ofc can be very large but still tractable.
    - This is more like a comment by Olah — mech. interp. isn’t supposed to be easy and should be expected to be as difficult as reverse engineering a large, complicated computer program.
  - **Variables and Activations**
    - [Visualizing Weights](https://distill.pub/2020/circuits/visualizing-weights/) discusses how NN parameters can be thought of as binary instructions and neuron activations being analogous to variables (or memory to which these variables are mapped — the mapping may or may not be straightforward).
    - Each parameter describes how previous activations affect later activations. And the meaning of parameter (analogous to operations in a computer program like consider x + y = 5 where ‘+’ is an operation) can be understood if we understand the input and output activations.
    - Activations are high dim vectors — Just like computer program memory (a high dim space), we segment the memory into variables which are easier to reason about and understood separately, we can break the activations.
    - See [A Mathematical Framework for Transformer Circuits](https://transformer-circuits.pub/2021/framework/index.html) — They show in some special cases including attention-only transformers, linearity can be used to describe all the network’s operations in terms of input and output of the model — Analogy is like some functions in computer programs can be described just in terms of arguments and return values without intermediate variables. What if this is not the case?
    - **Decompose activation into independently understandable pieces!**
  - Simple Memory Layout & Neurons —
    - Simple memory layouts in computer programs. Bytes in memory represent a single thing instead of each bit representing something unrelated. The former is more convenient to understand as compared to the latter, additionally, the hardware makes “simple” contiguous memory layouts more efficient. In conclusion, simple memory layout makes it easier to reverse engineer computer programs.
    - **Neural Networks**
      - Assume, NNs can be understood in terms of operations on a collection of independent “interpretable features”. These “interpretable features” can be thought of as being embedded as arbitrary directions in activation space.
      - NN layers with activations functions align features with their basis dimensions.
