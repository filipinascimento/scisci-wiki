# Altmetric coverage utility threshold

## Summary

Altmetric coverage utility threshold is the practical cutoff at which a source has enough nonzero observations to support the intended analysis, ranking, or evaluation task.

## Canonical Form

- Unit of analysis: source, field, journal, publication cohort, paper-source pair, or provider snapshot.
- Typical representation: nonzero coverage share, minimum event count, enough-data flag, source-utility threshold, or exceptional-paper-only label.
- Measurement target: whether a source is prevalent enough to distinguish typical papers or only rare high-attention cases.
- Empirical signature: statistically valid associations can coexist with coverage too sparse for routine comparative use.

## Uses in Science of Science

- Extends [altmetric coverage sparsity](altmetric_coverage_sparsity.md) from descriptive coverage to use-case readiness.
- Qualifies [altmetric-citation association](../validations/altmetric_citation_association.md), because a positive association among observed events may still have low recall.
- Helps decide when [positive altmetric-score conditioning](../methods/positive_altmetric_score_conditioning.md) produces a useful active set versus a tiny exceptional subset.
- Has a policy-specific form in [policy-altmetric 80/20 readiness rule](../validations/policy_altmetric_80_20_readiness_rule.md).
- Supports [responsible metrics](responsible_metrics.md) by separating interesting signals from indicators ready for evaluation.

## Operationalization

- Define the intended use first: descriptive monitoring, retrieval/ranking, highly cited paper filtering, evaluation, or case discovery.
- Estimate source-specific nonzero coverage by field, year, document type, journal, and provider snapshot.
- Compare coverage with minimum sample sizes needed for the analysis and with recall requirements for the use case.
- Label sources with very low coverage as exceptional-paper or case-finding signals rather than general indicators.
- Re-evaluate thresholds after source-list, API, platform, or provider changes.

## Evidence and Validations

- Verified full-text evidence from Thelwall et al. (2013) finds that coverage for all tested altmetric sources except possibly Twitter was low in the PubMed sample.
- Thelwall et al. state that low coverage combined with statistically significant source-citation associations may make a source useful for identifying exceptional or above-average articles, not for differentiating average articles.
- The same paper reports that evidence was insufficient for several low-volume sources and concludes that a social-web service still needs enough use to be worth reporting or analyzing.
- This separates source validity from practical utility: a source can point in the right direction but be too sparse for broad ranking or evaluation.

## Caveats

- There is no universal numeric threshold; the required coverage depends on the decision task and acceptable recall.
- High coverage can still be invalid if source events are noisy, gamed, field-biased, or poorly matched.
- Low-coverage sources may remain useful for qualitative tracing, policy case studies, or detecting rare societal attention.

## Links

- [altmetric coverage sparsity](altmetric_coverage_sparsity.md)
- [positive altmetric-score conditioning](../methods/positive_altmetric_score_conditioning.md)
- [altmetric zero-score semantics](../validations/altmetric_zero_score_semantics.md)
- [altmetric-citation association](../validations/altmetric_citation_association.md)
- [altmetric highly cited filtering](../validations/altmetric_highly_cited_filtering.md)
- [social media attention channels](../datasets/social_media_attention_channels.md)
- [Twitter mention counts](twitter_mention_counts.md)
- [responsible metrics](responsible_metrics.md)
- [policy-altmetric 80/20 readiness rule](../validations/policy_altmetric_80_20_readiness_rule.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]

## Metadata

- Concept ID: `altmetric_coverage_utility_threshold`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Thelwall et al. (2013) (2013)
- Primary reference DOI: `10.1371/journal.pone.0064841`
- OpenAlex ID: `W2073023209`
- Dimensions ID: `pub.1028078949`
- SciSciNet ID: `W2073023209`
- Aliases: altmetric source utility threshold; enough altmetric coverage; exceptional-article source threshold; sparse source readiness
