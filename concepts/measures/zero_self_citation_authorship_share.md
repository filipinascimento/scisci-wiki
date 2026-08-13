# Zero self-citation authorship share

## Summary

Zero self-citation authorship share measures the fraction of authorship instances in which an author does not cite any of their own prior work in the focal paper.

## Canonical Form

- Unit of analysis: authorship, paper, author group, field, year, or demographic stratum.
- Typical representation: share of authorships with zero self-citations, often compared with shares at one or more self-citations.
- Measurement target: distributional mass at no self-citation, rather than only mean self-citations per authorship.
- Empirical signature: one group can have a higher mean self-citation rate because fewer authorships are in the zero-self-citation category.

## Uses in Science of Science

- Adds a distributional view to [self-citation rates](self_citation_rates.md) and [authorship-normalized self-citation rate](authorship_normalized_self_citation_rate.md).
- Helps interpret [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md) as a broad behavioral distribution rather than an extreme-tail artifact.
- Links author-level self-citation behavior to [self-citation cumulative amplification](../mechanisms/self_citation_cumulative_amplification.md).
- Provides a simple diagnostic for [responsible metrics](responsible_metrics.md) when self-citation rates are compared across groups.

## Operationalization

- For each authorship, count self-citations made by that author in the focal paper.
- Flag authorships with zero self-citations.
- Aggregate the zero-self-citation share by gender, field, year, team size, career stage, or other strata.
- Compare the zero mass with the tail of high self-citation counts to determine whether group differences are broad or tail-driven.

## Evidence and Validations

- Verified full-text evidence from King et al. (2017) shows that most authorships have zero self-citations in a given paper.
- King et al. report that women are more than 10 percentage points more likely than men not to cite their own previous work at all.
- The paper states that 78.8% of women's authorships and 68.6% of men's authorships contain zero self-citations in the JSTOR analytic dataset.
- King et al. use the distribution to argue that the gendered mean difference is not driven only by extreme self-citers, but by ordinary authorship behavior across the distribution.

## Caveats

- Zero self-citation can reflect no available prior work, different paper type, field norm, collaboration role, or name-matching failure.
- The measure needs career-stage, productivity, field, and team-size context before being interpreted behaviorally.
- A high zero share should not automatically be treated as a deficit or a virtue.

## Links

- [self-citation rates](self_citation_rates.md)
- [authorship-normalized self-citation rate](authorship_normalized_self_citation_rate.md)
- [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md)
- [author-to-author self-citation edges](../representations/author_to_author_self_citation_edges.md)
- [self-citation cumulative amplification](../mechanisms/self_citation_cumulative_amplification.md)
- [self-citation team-size denominator effect](../validations/self_citation_team_size_denominator_effect.md)
- [responsible metrics](responsible_metrics.md)

## References

- King, M. M., Bergstrom, C. T., Correll, S. J., Jacquet, J., & West, J. D. (2017). Men set their own cites high: Gender and self-citation across fields and over time. *Socius: Sociological Research for a Dynamic World*, 3, 2378023117738903. https://doi.org/10.1177/2378023117738903 [OpenAlex: W2466144917; Dimensions: pub.1099634910; WoS: unknown]

## Metadata

- Concept ID: `zero_self_citation_authorship_share`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: King et al. (2017) (2017)
- Latest seen paper: King et al. (2017) (2017)
- Primary reference DOI: `10.1177/2378023117738903`
- OpenAlex ID: `W2466144917`
- Dimensions ID: `pub.1099634910`
- SciSciNet ID: `W3104836124`
- Aliases: zero self-citation share; no-self-citation authorships; self-citation absence rate; zero self-cite mass
