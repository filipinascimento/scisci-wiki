# Reference-citation balance

## Summary

Reference-citation balance is the accounting identity that every reference made by a new paper is also a citation received by some older item, even though the distributions of references made and citations received are very different.

## Canonical Form

- Unit of analysis: paper cohort, field-year, citation network, cited-reference set, or archival literature.
- Typical representation: references made by new papers balanced against citations received by prior papers.
- Representation target: separate the total edge count in a citation network from the skewed allocation of those edges across cited papers.
- Empirical signature: aggregate references and citations balance, while many old papers receive no citations and a small selected set receives repeated links.

## Uses in Science of Science

- Gives [citation networks](citation_networks.md) a cohort-level accounting layer.
- Helps interpret [research fronts](../mechanisms/research_fronts.md) as tightly linked subsets of a larger archival literature.
- Connects [citation impact indicators](../measures/citation_impact_indicators.md) to the denominator of possible cited papers.
- Provides historical grounding for [Web of Science](../datasets/web_of_science.md) and citation-index research.

## Operationalization

- Define a field, database, publication-year window, and cited-reference corpus.
- Count references made by new papers and citations received by older papers over the same window.
- Compare the total balance with the distribution of citations received per old paper.
- Separate outside-field references, uncited older papers, singly cited papers, and multiply cited papers.
- Report whether missing references, non-indexed sources, or database coverage break the observed balance.

## Evidence and Validations

- Verified full-text evidence from Price (1965) states that total citations must balance total references while their distributions differ strongly.
- Price reports that in a given year many existing papers are not cited, many are cited only once, and a small share receives multiple citations.
- Price's idealized almost-closed-field example assigns references from seven new papers to prior papers, outside-field items, and uncited old papers, showing how the accounting identity becomes a network representation.
- The same paper argues that half of references connect new papers diffusely to older literature, while the other half knit new papers to a small selected group of prior papers.
- The same evidence supports [annual citation-incidence distribution](../measures/annual_citation_incidence_distribution.md) and [research-front citation share](../measures/research_front_citation_share.md) as measurement splits from the accounting identity.
- Price's no-reference and never-cited discussion also supports the [pure citation-network disconnected residual](../validations/pure_citation_network_disconnected_residual.md) as a citation-only coverage caveat.

## Caveats

- The balance is exact only for the observed database and reference policy; non-indexed sources and missing references alter the measured balance.
- Citation counts are time-windowed observations, not permanent properties of papers.
- A balanced edge total does not imply balanced attention.

## Links

- [citation networks](citation_networks.md)
- [research fronts](../mechanisms/research_fronts.md)
- [uncited-paper mass](../measures/uncited_paper_mass.md)
- [pure citation-network disconnected residual](../validations/pure_citation_network_disconnected_residual.md)
- [annual citation-incidence distribution](../measures/annual_citation_incidence_distribution.md)
- [research-front citation share](../measures/research_front_citation_share.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [Web of Science](../datasets/web_of_science.md)
- [citation-index research infrastructure](../datasets/citation_index_research_infrastructure.md)

## References

- Price, D. J. de Solla. (1965). Networks of scientific papers. *Science*, 149(3683), 510-515. https://doi.org/10.1126/science.149.3683.510 [OpenAlex: W2088209891; Dimensions: pub.1062485810; WoS: unknown]

## Metadata

- Concept ID: `reference_citation_balance`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Price (1965) (1965)
- Latest seen paper: Price (1965) (1965)
- Primary reference DOI: `10.1126/science.149.3683.510`
- OpenAlex ID: `W2088209891`
- Dimensions ID: `pub.1062485810`
- SciSciNet ID: `W2088209891`
- Aliases: reference-citation accounting; citation-reference balance; citation edge balance; reference incidence balance
