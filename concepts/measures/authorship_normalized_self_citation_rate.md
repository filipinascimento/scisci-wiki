# Authorship-normalized self-citation rate

## Summary

Authorship-normalized self-citation rate measures self-citations per authorship rather than only per paper or per reference, making multi-author self-citation comparisons more comparable across groups, fields, and years.

## Canonical Form

- Unit of analysis: authorship, author group, field, year, gender group, or paper set.
- Typical representation: total self-citations divided by total authorships, often paired with a relative-rate ratio between groups.
- Measurement target: individual-level self-citation intensity after accounting for the number of author-paper opportunities.
- Empirical signature: group self-citation rates are normalized by author-paper counts rather than by papers alone.

## Uses in Science of Science

- Refines [self-citation rates](self_citation_rates.md) for multi-author corpora where paper-level overlap can overstate individual self-reference.
- Uses [author-to-author self-citation edges](../representations/author_to_author_self_citation_edges.md) as the numerator source and authorships as the denominator.
- Supplies the measurement layer for [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md) and other demographic comparisons.
- Helps separate real citation behavior from team-size artifacts in [responsible metrics](responsible_metrics.md).
- Provides a denominator-aware complement to [self-citation-adjusted team impact](../validations/self_citation_adjusted_team_impact.md).
- Can be decomposed into [zero self-citation authorship share](zero_self_citation_authorship_share.md) and checked with [self-citation team-size denominator effect](../validations/self_citation_team_size_denominator_effect.md).
- Uses [self-citation bootstrap ratio intervals](../methods/self_citation_bootstrap_ratio_intervals.md) when comparing group rates with uncertainty.

## Operationalization

- Define an authorship as a unique author-paper pair.
- Expand each paper-to-paper citation into all citing-author by cited-author pairs and flag self-citation pairs.
- For a group, year, field, or demographic stratum, count self-citations `s` and authorships `a`.
- Compute the rate as `s / a`, and report group ratios only after specifying the denominator and matching rule.
- When comparing groups, report uncertainty by resampling papers or authorships and disclose missing demographic assignments.

## Evidence and Validations

- Verified full-text evidence from King et al. (2017) defines an authorship as a unique author-paper pair.
- The same paper defines self-citation rate as mean self-citations per authorship, with total self-citations divided by total authorships for a group.
- King et al. use the denominator to compare men's and women's self-citation behavior by solving for a relative rate after standardizing women's self-citation rate.
- The paper reports 1,017,362 author-to-author self-citations in the analytic dataset, with known-gender self-citations distributed 84.8% to men and 15.2% to women before relative-rate normalization.
- King et al. show that most authorships contain zero self-citations and that mean self-citations per authorship decline as team size increases.

## Caveats

- Authorship normalization does not by itself solve field, career-stage, collaboration, or productivity differences.
- It depends on the self-citation edge definition; paper-level overlap and author-to-author pairs yield different rates.
- Name matching, disambiguation, and gender inference errors can bias both numerator and denominator.
- Large collaborations can generate many author-to-author pairs, so paper-level and authorship-level results should be reported separately.

## Links

- [self-citation rates](self_citation_rates.md)
- [author-to-author self-citation edges](../representations/author_to_author_self_citation_edges.md)
- [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md)
- [zero self-citation authorship share](zero_self_citation_authorship_share.md)
- [self-citation bootstrap ratio intervals](../methods/self_citation_bootstrap_ratio_intervals.md)
- [self-citation team-size denominator effect](../validations/self_citation_team_size_denominator_effect.md)
- [JSTOR network dataset](../datasets/jstor_network_dataset.md)
- [full-name self-citation matching](../methods/full_name_self_citation_matching.md)
- [responsible metrics](responsible_metrics.md)
- [self-citation-adjusted team impact](../validations/self_citation_adjusted_team_impact.md)
- [citation impact indicators](citation_impact_indicators.md)

## References

- King, M. M., Bergstrom, C. T., Correll, S. J., Jacquet, J., & West, J. D. (2017). Men set their own cites high: Gender and self-citation across fields and over time. *Socius: Sociological Research for a Dynamic World*, 3, 2378023117738903. https://doi.org/10.1177/2378023117738903 [OpenAlex: W2466144917; Dimensions: pub.1099634910; WoS: unknown]

## Metadata

- Concept ID: `authorship_normalized_self_citation_rate`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: King et al. (2017) (2017)
- Latest seen paper: King et al. (2017) (2017)
- Primary reference DOI: `10.1177/2378023117738903`
- OpenAlex ID: `W2466144917`
- Dimensions ID: `pub.1099634910`
- SciSciNet ID: `W3104836124`
- Aliases: self-citations per authorship; mean self-citations per authorship; authorship-level self-citation rate; gender relative self-citation rate
