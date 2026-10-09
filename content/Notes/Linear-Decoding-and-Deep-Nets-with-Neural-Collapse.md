---
title: "Linear Decoding and Deep Nets with Neural Collapse"
date: 2024-06-28
tags: ["math", "informationtheory"]
aliases:
  - "Daily-Notes/Linear-Decoding-and-Deep-Nets-with-Neural-Collapse"
---

[XY Han, Prevalence of Neural Collapse during the terminal phase of deep learning train., 2021.10.05](https://www.youtube.com/watch?v=AR31V1LSkOM)

The following notes are based on the seminar video by one of the original authors of the Neural Collapse paper.

**Simplex equiangular tight frame (ETF)**: Equinorm, Equiangle, Maximal Angle.

**\[NC1\]** Variability collapse: within-class variable collapse (features collapse)

**\[NC2\]** Class mean convergence to simplex ETF: within a space where number of vectors/classes is smaller than the dimension of the space. The trad ETF is within a setting a where there are more vectors than dimensions → the definition of the frame is that the smallest eigenvalue of the vectors of the frame is greater than zero, it spans the space. Here, the spanning condition is relaxed and the structure is retained.

**\[NC3\]** Convergence to self-duality: means and classifier converge to each other. 

**\[NC4\]** Behavioral convergence to nearest class center: The classifier is simply the nearest neighbor to the class mean (See theoretical proof in the paper).

> [!question] What advantages do we have if we train beyond zero error?
>
> - Improves generalization, test performance.
> - Improves adversarial robustness (DeepFool metric)

## Feature Engineering

Notation exposes only last-layer objects: $W$ and $h_{i,c}=h_{i,c}^{L}$. **Full notation** $(W,\Theta)$

- $W$ : last-layer classifier ($C$-dimensional vectors)
- $\Theta$ : parameters of earlier layers **Last-layer activations**:  $h_{i,C}=h(X_{i,c};\Theta)$

**Optimizing** $h(\cdot;\Theta)$: ‘Feature engineering’.

> [!note] Neural Collapse is the **preferred end-state** of **every successful exercise** in feature engineering. Similar idea was proposed by Shannon in his 1959 paper **“Probability of Error for Optimal Codes in a Gaussian Channel”**.

## Linear Decoding Over Gaussian Channel

Transmitter transmits codeword: $\mu_\gamma\in\{\mu_C\}_{c=1}^{C},\quad\gamma\sim\text{Unif}\{1,\ldots,C\}$.

Receiver receives: $h=\mu_\gamma+z,\quad z\sim\mathcal{N}(0,\sigma^2 I)$.

Linear decoder with weights $\{w_c\}_{c=1}^{C}$ and biases $\{b_c\}_{c=1}^{C}$ :

$$
\hat{\gamma}(h)=\operatorname{arg}\max_c\langle w_c,h\rangle+b_c
$$

**Goal**: Design weights, biases and codewords such that $\lVert\mu_c\rVert_2\leqslant 1$. Here we have a norm bound on the means. So choose the best codeword so that the decoder’s job is the easiest, basically learn features in such a way that it is easier to classify as for our case.

This is similar to the feature engineering problem we have. Shannon gave bounds for what the angles between the codewords must be as the dimension of the codewords (size of the codewords) increases.

For us, we look at other things. We know that for deep nets, the signal overwhelms the noise therefore $\sigma\to 0$. So what is the limiting ratio that we should look at, limit exists as we go to infinity? Defined below. (this is different from what Shannon considered).

**Large deviations error exponent** $\to$

$$
\beta(H,W,b)=-\sigma^2\log P_\sigma\{\hat{\gamma}(h)\neq\gamma\}
$$

where $-\sigma^2$ and $\log P_\sigma\{\hat{\gamma}(h)\neq\gamma\}$ are opposing as initially noise is high and signal is low, thus misclassification occurs and as we keep training $\sigma$ lowers essentially tending to $0$, first time thus increasing and the rate of misclassification decreases.

**Optimal Error Exponent** $\to$

$$
\beta_C^*\equiv\max_{H,W,b}\beta(H,W,b)
$$

## References

\[1\] Papyan, Vardan, X. Y. Han, and David L. Donoho. “Prevalence of neural collapse during the terminal phase of deep learning training.” *Proceedings of the National Academy of Sciences* 117.40 (2020): 24652-24663.
