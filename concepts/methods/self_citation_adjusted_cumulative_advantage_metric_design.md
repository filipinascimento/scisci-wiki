# Self-citation-adjusted cumulative-advantage metric design

## Summary

Self-citation-adjusted cumulative-advantage metric design is the method idea that evaluation indicators should consider both direct self-citations and the later external citations those self-citations may help attract.

## Canonical Form

- Unit of analysis: author, paper, self-citation, downstream citation, evaluation metric, or cumulative-advantage pathway.
- Typical representation: self-citation-excluded metric, sensitivity analysis, downstream-amplification model, or audit flag.
- Measurement target: avoid treating self-citations as either fully irrelevant or fully equivalent to independent external attention.
- Empirical signature: metric designs report how direct self-citation removal changes scores and whether self-citation may have seeded later non-self citations.

## Uses in Science of Science

- Operational extension of [self-citation cumulative amplification](../mechanisms/self_citation_cumulative_amplification.md).
- Links self-citation evidence to [responsible metrics](../measures/responsible_metrics.md) and [citation impact indicators](../measures/citation_impact_indicators.md).
- Provides a design response to [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md).
- Helps distinguish simple self-citation exclusion from a broader cumulative-advantage audit.

## Operationalization

- Compute citation indicators with and without direct self-citations.
- Track downstream citations that arrive after self-citations when temporal data allow.
- Report database support for self-citation visibility and author disambiguation.
- Use sensitivity analyses rather than a single adjusted score when causal amplification is uncertain.

## Evidence and Validations

- Verified full-text evidence from King et al. (2017) argues that self-citations can add directly to citation counts and may increase later visibility to other scholars.
- The paper suggests evaluation systems should be aware of self-citations and their possible cumulative consequences.
- This motif is distinct from the cumulative-amplification mechanism because it specifies metric-design handling.
- It is also distinct from direct self-citation exclusion because it recognizes downstream amplification as a separate issue.

## Caveats

- Estimating indirect amplification requires temporal and causal assumptions.
- Removing all self-citations can penalize legitimate programmatic continuity.
- Author disambiguation quality can dominate the validity of adjusted indicators.

## Links

- [self-citation cumulative amplification](../mechanisms/self_citation_cumulative_amplification.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md)
- [self-citation rates](../measures/self_citation_rates.md)
- [citation metric gaming](../validations/citation_metric_gaming.md)

## References

- King, M. M., Bergstrom, C. T., Correll, S. J., Jacquet, J., & West, J. D. (2017). Men set their own cites high: Gender and self-citation across fields and over time. *Socius: Sociological Research for a Dynamic World*, 3, 2378023117738903. https://doi.org/10.1177/2378023117738903 [OpenAlex: W2466144917; Dimensions: pub.1099634910; SciSciNet: W3104836124; WoS: unknown]

## Metadata

- Concept ID: `self_citation_adjusted_cumulative_advantage_metric_design`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: King et al. (2017) (2017)
- Latest seen paper: King et al. (2017) (2017)
- Primary reference DOI: `10.1177/2378023117738903`
- OpenAlex ID: `W2466144917`
- Dimensions ID: `pub.1099634910`
- SciSciNet ID: `W3104836124`
- Aliases: self-citation adjusted metric design; cumulative self-citation metric audit; indirect self-citation adjustment; self-citation amplification metric design
