# Credit metric jockeying risk

## Summary

Credit metric jockeying risk is the possibility that making citation-based credit-allocation mechanisms explicit encourages strategic behavior intended to alter inferred credit shares.

## Canonical Form

- Unit of analysis: author, coauthor team, focal paper, citation neighborhood, evaluation rule, or credit metric.
- Typical representation: strategic-positioning caveat, metric-gaming risk, evaluation feedback loop, or audit requirement for attribution metrics.
- Validation target: assess whether public credit metrics reshape author behavior or citation behavior in ways that contaminate the metric.
- Empirical signature: authors attempt to influence coauthor order, citation neighborhoods, related-paper publication, or evaluation narratives after learning the metric.

## Uses in Science of Science

- Extends [citation metric gaming](citation_metric_gaming.md) from raw citation counts and journal metrics to attribution-aware credit shares.
- Adds a behavioral feedback caveat to [collective credit allocation](../measures/collective_credit_allocation.md).
- Connects [indicator systemic effects](../mechanisms/indicator_systemic_effects.md) with coauthor-credit evaluation.
- Supports [responsible metrics](../measures/responsible_metrics.md) by warning against using credit-allocation algorithms as a sole evaluation tool.

## Operationalization

- State whether the credit algorithm is used descriptively, diagnostically, or as part of formal evaluation.
- Track changes in author-order practices, self-citation, strategic co-citation, and publication of related companion papers after metric adoption.
- Compare credit shares with contribution statements, letters from coauthors, acknowledgments, and qualitative field knowledge.
- Audit low-impact or sparse-citation cases separately, because individual strategic actions can matter more when collective citation signals are weak.
- Treat the metric as one evidence layer rather than an automated allocation rule.

## Evidence and Validations

- Verified full-text evidence from Shen and Barabasi (2014) warns that uncovering the mechanism of credit allocation may increase the likelihood that authors "jockey" for position to change the outcome.
- The paper argues that such manipulation is more realistic for lower-impact work where collective citation effects do not dominate the citation count.
- Shen and Barabasi explicitly caution against turning the algorithm into the sole tool for credit allocation and recommend using it with other evaluation evidence such as letters from coauthors.
- This creates a feedback-loop validation issue: once an attribution metric is operationalized, it can become part of the behavior it measures.

## Caveats

- Strategic behavior is difficult to distinguish from legitimate efforts to clarify contribution.
- Large, highly cited discoveries may be less sensitive to individual manipulation than sparse citation neighborhoods.
- Overemphasizing gaming risk can also discourage useful transparency about credit-allocation assumptions.

## Links

- [citation metric gaming](citation_metric_gaming.md)
- [collective credit allocation](../measures/collective_credit_allocation.md)
- [co-citation credit attribution](../methods/co_citation_credit_attribution.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [indicator systemic effects](../mechanisms/indicator_systemic_effects.md)
- [credit allocation maturation lag](credit_allocation_maturation_lag.md)

## References

- Shen, H.-W., & Barabasi, A.-L. (2014). Collective credit allocation in science. *Proceedings of the National Academy of Sciences*, 111(34), 12325-12330. https://doi.org/10.1073/pnas.1401992111 [OpenAlex: W2037997493; Dimensions: pub.1014325139; WoS: unknown]

## Metadata

- Concept ID: `credit_metric_jockeying_risk`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Shen and Barabasi (2014) (2014)
- Latest seen paper: Shen and Barabasi (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1401992111`
- OpenAlex ID: `W2037997493`
- Dimensions ID: `pub.1014325139`
- SciSciNet ID: `W2037997493`
- Aliases: credit gaming risk; attribution metric gaming; credit-position jockeying; credit-allocation feedback risk
