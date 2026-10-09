---
title: "Language Models for Text Classification: Is In-Context Learning Enough?"
date: 2024-06-29
tags: ["llms", "incontextlearning", "textclassification"]
---

**Link:** [\[2403.17661\] Language Models for Text Classification: Is In-Context Learning Enough?](https://arxiv.org/abs/2403.17661)

This paper explores how text generation models combined with prompting techniques (in-context learning) compare to fine-tuning for text classification i.e., the authors compare zero- and few-shot approaches of LLMs to fine-tuning smaller language models. **They find that finetuning smaller and efficient (?) language models outperforms few-shot approaches in large language models for text classification.**

This note will be quite verbose and at times, verbatim, since this is the first time I am reading literature on this topic.

## Prior Research

1.  **Standard approach for supervised text classification** $\to$ Finetune LMs such as BERT using an additional classifier head but this requires a lot of data to achieve SOTA results and hence is not suitable for classifications tasks where class imbalances and data sparsity is present (data is generally hard to come by or is imbalanced in specific domains). More data, better performance!
2.  **Alternative approach** is based on using autoregressive text generation models which can perform unseen tasks through the use of prompting (they have zero and few-shot capabilities). In the zero-shot setting, instruction fine-tuning leads to improvement.
3.  Prompt-engineering techniques have been used to improve generalization and for domain and task-specific improvements.

### Text Classification

Three main approaches to text classification exist $-$

1.  **Linear Methods**: FastText is a linear classification model which integrates a linear model with a rank constraint which allows sharing parameters among classes and features. It also integrates word embeddings which are average into text. *Advantages:* Dealing with out-of-vocabulary words and fine-grained distinctions between classes.
2.  **Fine-tuning Methods**: Models like BERT and RoBERTa trained with masked language modeling (MLM) objective can be adapted for text-classification by using fine-tuning techniques based on adding a single classification layer onto the model. As discussed above, it requires a lot of data.
3.  **Text Generation Models**:

*Continuing soon…*

## Appendix

### Masked Language Modeling (MLM)

See [[Daily-Notes/Masked-Language-Modeling|Masked Language Modeling]] for more details.
