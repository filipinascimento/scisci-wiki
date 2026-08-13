# Pairwise citation-probability decay

## Summary

Pairwise citation-probability decay is the measure of how the chance that a later paper cites a particular earlier paper falls as the literature archive grows.

## Canonical Form

- Unit of analysis: citing paper, cited paper, publication age, field archive, or directed citation edge.
- Typical representation: dyadic edge probability by age or archive size.
- Measurement target: baseline opportunity for any one older paper to receive a citation from any one newer paper.
- Empirical signature: the dyadic citation probability declines with archive growth even when aggregate reference counts remain stable.

## Uses in Science of Science

- Adds a paper-pair denominator to [growth-normalized citation-age baseline](../methods/growth_normalized_citation_age_baseline.md).
- Complements the [citation immediacy effect curve](citation_immediacy_effect_curve.md), which is a cited-age distribution rather than a dyadic edge probability.
- Helps interpret [reference-citation balance](../representations/reference_citation_balance.md) under exponential literature growth.
- Gives citation-network models a simple baseline for aging and archive dilution.

## Operationalization

- Define a bounded field archive and yearly publication cohorts.
- Count possible later-earlier paper pairs and observed citation edges among them.
- Estimate the probability that a new paper cites a particular older paper by publication-age interval.
- Compare observed decay with archive-growth baselines and field-normalized reference counts.
- Report whether the decay is driven by growth, aging, field drift, or reference-list length change.

## Evidence and Validations

- Verified full-text evidence from Price (1965) argues that as science grows, the chance that any one later paper cites any one earlier paper falls rapidly.
- Price gives an illustrative decay scale for this pairwise citation chance, distinct from the aggregate number of citations received by a cohort.
- The motif separates dyadic opportunity dilution from cited-age curves and annual citation-incidence distributions.
- It is useful for interpreting why old papers can become less likely citation targets even when reference lists remain long.

## Caveats

- The original calculation is stylized and depends on field growth assumptions.
- Modern digital search, review articles, and citation recommendation can change dyadic visibility.
- The measure should be field bounded; cross-field citation opportunities have different denominators.

## Links

- [growth-normalized citation-age baseline](../methods/growth_normalized_citation_age_baseline.md)
- [citation immediacy effect curve](citation_immediacy_effect_curve.md)
- [reference-citation balance](../representations/reference_citation_balance.md)
- [citation networks](../representations/citation_networks.md)
- [research fronts](../mechanisms/research_fronts.md)
- [annual citation-incidence distribution](annual_citation_incidence_distribution.md)

## References

- Price, D. J. de Solla. (1965). Networks of scientific papers. *Science*, 149(3683), 510-515. https://doi.org/10.1126/science.149.3683.510 [OpenAlex: W2088209891; Dimensions: pub.1062485810; SciSciNet: W2088209891; WoS: unknown]

## Metadata

- Concept ID: `pairwise_citation_probability_decay`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Price (1965) (1965)
- Latest seen paper: Price (1965) (1965)
- Primary reference DOI: `10.1126/science.149.3683.510`
- OpenAlex ID: `W2088209891`
- Dimensions ID: `pub.1062485810`
- SciSciNet ID: `W2088209891`
- Aliases: dyadic citation probability decay; paper-pair citation chance; archive dilution edge probability; citation opportunity decay
