# Distance-based basic-applied typology

## Summary

Distance-based basic-applied typology classifies fields, institutions, journals, funders, or individuals by their citation distance from the science-technology boundary instead of using loose labels such as basic or applied.

## Canonical Form

- Unit of analysis: field, technology class, institution, journal, funder, scientist, patent, paper, or portfolio.
- Typical representation: mean distance, modal distance, connected share, distance distribution, or portfolio location profile.
- Method target: create a quantitative typology of research outputs by proximity to technological invention or scientific advance.
- Empirical signature: fields, institutions, and people differ systematically in their average distance from the patent-paper boundary.

## Uses in Science of Science

- Turns [science-technology distance](../measures/science_technology_distance.md) into a classification method for portfolios and organizations.
- Gives [responsible metrics](../measures/responsible_metrics.md) a richer alternative to binary basic/applied categories.
- Helps compare universities, firms, government laboratories, journals, funders, and individuals using one network-derived coordinate.
- Connects to [mission-aligned indicator selection](mission_aligned_indicator_selection.md), because the same distance value can have different evaluation meanings across missions.

## Operationalization

- Compute patent-paper boundary distance for papers and patents in an integrated citation network.
- Aggregate distance measures by field, technology class, institution, funder, journal, or person.
- Report mean, mode, standard deviation, connected share, and direct-boundary share.
- Interpret distance together with field composition, institutional mission, and impact outcomes rather than treating lower distance as universally better.

## Evidence and Validations

- Verified full-text evidence from Ahmadpoor and Jones (2017) applies their distance metric to 185 Web of Science fields and 388 USPTO technology classes.
- The paper reports large variation in mean distance across science fields and patent classes, with nanotechnology, biomaterials, and computer hardware close to the patent frontier and mathematics farther away.
- Ahmadpoor and Jones argue that the metric tightens traditional but loose descriptors around basic and applied scientific research.
- Their conclusion states that the distance metric can characterize fields, journals, funders, research institutions, and individual careers.

## Caveats

- Distance to patents is not a universal quality score and should not be used to penalize fields whose mission is not near-term invention.
- Portfolio distance depends on the coverage and matching quality of patent and paper data.
- A single mean can hide multimodal portfolios, disconnected outputs, and distinct direct versus indirect paths.

## Links

- [science-technology distance](../measures/science_technology_distance.md)
- [indirect patent-paper distance distribution](../measures/indirect_patent_paper_distance_distribution.md)
- [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md)
- [patent-paper boundary](../representations/patent_paper_boundary.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [mission-aligned indicator selection](mission_aligned_indicator_selection.md)
- [field classifications](../measures/field_classifications.md)

## References

- Ahmadpoor, M., & Jones, B. F. (2017). The dual frontier: Patented inventions and prior scientific advance. *Science*, 357(6351), 583-587. https://doi.org/10.1126/science.aam9527 [OpenAlex: W2743628650; Dimensions: pub.1091201170; WoS: unknown]

## Metadata

- Concept ID: `distance_based_basic_applied_typology`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Ahmadpoor and Jones (2017) (2017)
- Latest seen paper: Ahmadpoor and Jones (2017) (2017)
- Primary reference DOI: `10.1126/science.aam9527`
- OpenAlex ID: `W2743628650`
- Dimensions ID: `pub.1091201170`
- SciSciNet ID: `W2743628650`
- Aliases: basic-applied distance typology; R&D output distance typology; patent-frontier portfolio typology; dual-frontier portfolio classification
