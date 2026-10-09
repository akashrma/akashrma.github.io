---
title: "How Does Information Bottleneck Help Deep Learning?"
date: 2024-07-09
---

In the paper **Representation compression and generalization in deep neural networks** (Shwartz-Ziv et al., 2019), the following conjecture is given.

> [!info] **Conjecture 1. (Informal Version)**
>
> With probability $1-\delta$ over the training data $s=\{(x_i,u_i)\}_{i=1}^{n}$ drawn from the same distribution as a random variable pair $(X,Y)$, for the generalization error $\Delta(s)=\mathbb{E}_{X,Y}[l(f^s(X),Y)]-\frac{1}{n}\sum_{i=1}^{n}l(f^s(x_i),y_i)$, there is a bound obeying the following form:
>
> $$
> \Delta(s)\leqslant\sqrt{\frac{2^{I(X;Z_l^s)}+\log\frac{2}{\delta}}{2n}},
> $$
>
> where $f^s$ is the full model obtained by training and $Z_l^s=\phi_l^s(X)$ is the output of an intermediate $l$-layer encoder $\phi_l^s$ of the model, i.e., representation obtained after passing through the first $l$ layers.
