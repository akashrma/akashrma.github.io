---
title: "Some definitions in Information Theory"
date: 2024-06-25
tags: ["math"]
---

- ***Entropy*** can intuitively be thought of as a measure of information, for any probability distribution or in other words, uncertainty of a random variable.
- ***Mutual information*** is the measure of the amount of information one random variable contains about another.
- ***Relative Entropy*** is the measure of the distance between two probability distributions.

> [!note]
>
> Entropy can be thought of as the self-information of a random variable and mutual information is a special case of relative entropy.

## Entropy

> [!definition]
>
> The entropy $\text{H}(X)$ of a discrete random variable $X$ is defined by
>
> $$
> \text{H}(X)=-\sum_{x\in\mathcal{X}}p(x)\log p(x)
> $$

## Joint Entropy

> [!definition]
>
> The *joint entropy* $\text{H}(X,Y)$ of a pair of discrete random variables $(X,Y)$ with a joint distribution $p(x,y)$ is defined as
>
> $$
> \text{H}(X,Y)=-\sum_{x\in\mathcal{X}}\sum_{y\in\mathcal{Y}}p(x,y)\log p(x,y)
> $$
>
> also,
>
> $$
> \text{H}(X,Y)=-\text{E}\log p(X,Y)
> $$

## Relative Entropy or Kullback-Leibler Distance

> [!definition]
>
> The *relative entropy* or *Kullback-Leibler distance* between two probability mass functions $p(x)$ and $q(x)$ is defined as
>
> $$
> \begin{aligned}\text{D}(p\Vert q)&=\sum_{x\in\mathcal{X}}p(x)\log\frac{p(x)}{q(x)}\\&=\text{E}_p\log\frac{p(X)}{q(X)}\end{aligned}
> $$

## Mutual Information

> [!definition]
>
> Consider two random variables $X$ and $Y$ with a joint probability mass function $p(x,y)$ and marginal probability mass functions $p(x)$ and $p(y)$. The *mutual information* $\text{I}(X,Y)$ is the relative entropy between the joint distribution and the product distribution $p(x)p(y)$:
>
> $$
> \begin{aligned}\text{I}(X;Y)&=\sum_{x\in\mathcal{X}}\sum_{y\in\mathcal{Y}}p(x,y)\log\frac{p(x,y)}{p(x)p(y)}\\&=\text{D}(p(x,y)\Vert p(x)p(y))\\&=\mathbb{E}_{p(x,y)}\log\frac{p(X,Y)}{p(X)p(Y)}\end{aligned}
> $$
