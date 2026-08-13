# Topic-dimensionality overfit turnover

## Summary

Topic-dimensionality overfit turnover is the point where increasing the number of topics stops improving substantive fit and begins fitting noise or overly fine distinctions.

## Canonical Form

- Unit of analysis: topic model, topic count, likelihood curve, held-out set, or selected model.
- Typical representation: likelihood or perplexity as a function of topic count, plus interpretability checks.
- Validation target: distinguish underfit, useful granularity, and overfit topic-dimensionality regimes.
- Empirical signature: fit improves with more topics up to a turnover region, after which added topics provide weak or noisy gains.

## Uses in Science of Science

- Refines [topic-number model selection](../methods/topic_number_model_selection.md).
- Complements [topic-model perplexity benchmark](topic_model_perplexity_benchmark.md) with an overfit interpretation.
- Connects to [topic-granularity hyperparameter sensitivity](topic_granularity_hyperparameter_sensitivity.md) because priors alter effective dimensionality.
- Helps protect [topic prevalence dynamics](../methods/topic_prevalence_dynamics.md) from trends driven by excessive topic splitting.

## Operationalization

- Fit comparable topic models over a range of topic counts.
- Track likelihood, held-out perplexity, or another predictive-fit score.
- Inspect the region where gains flatten or reverse.
- Pair fit curves with topic interpretability and stability checks.
- Record the selected count and why smaller or larger alternatives were rejected.

## Evidence and Validations

- Verified full-text evidence from Griffiths and Steyvers (2004) evaluates model likelihood across topic counts for PNAS abstracts.
- The paper interprets small topic counts as underfitting and very large topic counts as risking noise-fitting or overly fine distinctions.
- Their selected 300-topic model is justified through Bayesian model-selection logic plus substantive inspection.
- This makes topic dimensionality a validation choice rather than a purely computational parameter.

## Caveats

- Predictive fit and human interpretability can favor different topic counts.
- Overfit turnover depends on corpus size, document length, preprocessing, and priors.
- A single global topic count may be unsuitable for heterogeneous corpora.

## Links

- [topic-number model selection](../methods/topic_number_model_selection.md)
- [topic-model perplexity benchmark](topic_model_perplexity_benchmark.md)
- [topic-granularity hyperparameter sensitivity](topic_granularity_hyperparameter_sensitivity.md)
- [corpus-design topic-granularity sensitivity](corpus_design_topic_granularity_sensitivity.md)
- [topic-model posterior non-identifiability](topic_model_posterior_nonidentifiability.md)
- [topic prevalence dynamics](../methods/topic_prevalence_dynamics.md)

## References

- Griffiths, T. L., & Steyvers, M. (2004). Finding scientific topics. *Proceedings of the National Academy of Sciences*, 101(suppl_1), 5228-5235. https://doi.org/10.1073/pnas.0307752101 [OpenAlex: W2001082470; Dimensions: pub.1026144033; WoS: unknown]

## Metadata

- Concept ID: `topic_dimensionality_overfit_turnover`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Griffiths and Steyvers (2004) (2004)
- Latest seen paper: Griffiths and Steyvers (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307752101`
- OpenAlex ID: `W2001082470`
- Dimensions ID: `pub.1026144033`
- SciSciNet ID: `W2001082470`
- Aliases: topic-count overfit point; topic-dimensionality turnover; topic model overfitting threshold; topic-count fit plateau
