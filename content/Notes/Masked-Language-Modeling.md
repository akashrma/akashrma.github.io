---
title: "Masked Language Modeling"
date: 2024-06-29
tags: ["llms", "definition"]
aliases:
  - "Daily-Notes/Masked-Language-Modeling"
---

## Setup

With BERT, the input sequence is a concatenation of two sequences of tokens $(x_1,\ldots,x_N)$ and $(y_1,\ldots,y_M)$, this input sequence is presented as follows:

$$
[\text{CLS}],x_1,\ldots,x_N,[\text{SEP}],y_1,\ldots,y_M,[\text{EOS}].
$$

$M$ and $N$ are subject to the constraint $M+N<T$, where $T$ is the maximal context/sequence length during training. The sequences are delimited by special tokens. The two sequences can be sampled contiguously from the same document with probability 0.5 or from distinct documents.

## Training Objective

1.  Pick a random sample of the tokens in the input sequence and replace it with a special token $[\text{MASK}]$.
2.  MLM objective $\to$ Cross-Entropy Loss on predicting the masked tokens.
3.  For BERT, the following happens $-$
    1.  Select 15$\%$ of the input tokens for possible replacement with uniform probability.
    2.  Out of the selected tokens, replace 80$\%$ with $[\text{MASK}]$, leave 10$\%$ unchanged and replace the rest with a randomly selected token from the vocabulary.

### Static vs. Dynamic Masking

In the RoBERTa paper, a *dynamic masking* strategy is used.

- **Static Masking**: In the original implementation for BERT, masking is done during data preprocessing i.e., it is fixed during the training. This can lead to the same mask during each epoch for a specific sequence/training instance, so instead they duplicate the training set 10 times and mask it in 10 different ways. So, for a training instance, for 40 epochs, it is seen with 4 different masks during the training.
- **Dynamic Masking**: Generate a masking pattern every time a sequence is fed to the model.

Dynamic masking is crucial when pre-training for more steps and larger datasets. It also performs comparably with static masking and is more efficient.
