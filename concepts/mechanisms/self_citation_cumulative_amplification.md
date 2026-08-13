# Self-citation cumulative amplification

## Summary

Self-citation cumulative amplification is the mechanism by which an author's own citations can raise early visibility and citation counts, which can then attract additional external citations through cumulative advantage.

## Canonical Form

- Unit of analysis: author, paper, early citation trajectory, field, career, or evaluation portfolio.
- Typical representation: direct self-citation count plus downstream external citation gain, preferential-attachment visibility model, or self-citation-excluded robustness check.
- Mechanism: self-citations contribute initial attention and can make a paper more likely to be noticed, read, indexed, and cited by others.
- Empirical signature: self-citations appear early in a paper's life and are associated with later citation accumulation beyond the direct self-citation count.

## Uses in Science of Science

- Connects [self-citation rates](../measures/self_citation_rates.md) to [cumulative advantage](cumulative_advantage.md) and [attention inequality](attention_inequality.md).
- Provides a behavioral mechanism for [gendered self-citation gap](gendered_self_citation_gap.md), because group differences in self-citation can compound into visibility differences.
- Explains why [citation impact indicators](../measures/citation_impact_indicators.md) often need self-citation-excluded reporting.
- Motivates robustness checks such as [h-index self-citation sensitivity](../validations/h_index_self_citation_sensitivity.md) and [self-citation-adjusted team impact](../validations/self_citation_adjusted_team_impact.md).
- Can be measured with [authorship-normalized self-citation rate](../measures/authorship_normalized_self_citation_rate.md) and [author-to-author self-citation edges](../representations/author_to_author_self_citation_edges.md).

## Operationalization

- Separate direct self-citations from external citations in early citation histories.
- Compare citation growth with and without self-citations, ideally within field, year, author, team-size, and journal strata.
- Model whether early self-citations predict later non-self citations after controlling for productivity, reputation, topic, and venue.
- Report both direct arithmetic effects and inferred indirect amplification effects.
- Treat extreme cases as audit signals rather than automatic evidence of misconduct.

## Evidence and Validations

- Verified full-text evidence from King et al. (2017) states that self-citation can directly and indirectly increase an author's citation counts.
- King et al. cite prior evidence that an additional self-citation is associated, on average, with additional later citations from other scholars over a five-year period.
- The paper links the mechanism to preferential attachment, where each received citation can generate further citations, and notes that self-citations can be especially important because they are often among a paper's first citations.
- King et al. give an extreme author-level example in which more than 1,500 of nearly 7,000 Web of Science citations were self-citations, while emphasizing that their aim is not to criticize self-citation as inherently improper.

## Caveats

- Self-citation can be legitimate continuity, method reuse, or necessary context; amplification is not automatically gaming.
- Correlation between self-citations and later external citations can reflect paper quality, field norms, productivity, or reputation rather than a causal self-citation effect.
- Removing self-citations from counts captures only the direct effect unless later external citations induced by self-citation are also modeled.
- Field differences in reference practices and collaboration size can strongly affect observed amplification.

## Links

- [self-citation rates](../measures/self_citation_rates.md)
- [authorship-normalized self-citation rate](../measures/authorship_normalized_self_citation_rate.md)
- [author-to-author self-citation edges](../representations/author_to_author_self_citation_edges.md)
- [JSTOR network dataset](../datasets/jstor_network_dataset.md)
- [gendered self-citation gap](gendered_self_citation_gap.md)
- [cumulative advantage](cumulative_advantage.md)
- [attention inequality](attention_inequality.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [h-index self-citation sensitivity](../validations/h_index_self_citation_sensitivity.md)
- [self-citation-adjusted team impact](../validations/self_citation_adjusted_team_impact.md)

## References

- King, M. M., Bergstrom, C. T., Correll, S. J., Jacquet, J., & West, J. D. (2017). Men set their own cites high: Gender and self-citation across fields and over time. *Socius: Sociological Research for a Dynamic World*, 3, 2378023117738903. https://doi.org/10.1177/2378023117738903 [OpenAlex: W2466144917; Dimensions: pub.1099634910; WoS: unknown]

## Metadata

- Concept ID: `self_citation_cumulative_amplification`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: King et al. (2017) (2017)
- Latest seen paper: King et al. (2017) (2017)
- Primary reference DOI: `10.1177/2378023117738903`
- OpenAlex ID: `W2466144917`
- Dimensions ID: `pub.1099634910`
- SciSciNet ID: `W3104836124`
- Aliases: self-citation amplification; self-citation cumulative advantage; indirect self-citation effect; self-citation visibility feedback
