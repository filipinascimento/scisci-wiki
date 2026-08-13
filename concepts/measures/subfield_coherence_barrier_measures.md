# Subfield coherence barrier measures

## Summary

Subfield coherence barrier measures quantify how intellectually and socially closed a local research field appears, helping explain when outsiders avoid or enter a field.

## Canonical Form

- Unit of analysis: subfield, article set, reference set, coauthorship network, or barrier stratum.
- Typical representation: content-coherence score, self-reference fraction, coauthorship clustering coefficient, or high/low coherence split.
- Measurement target: field topology as a barrier to outsider entry and acceptance.
- Empirical signature: outsider entry is weaker in fields with higher intellectual or social coherence.

## Uses in Science of Science

- Supplies field-topology measures for [star-scientist entry deterrence](../mechanisms/star_scientist_entry_deterrence.md).
- Links content-based fields from [PMRA subfield delineation](../methods/pmra_subfield_delineation.md) to [collaboration clustering coefficient](collaboration_clustering_coefficient.md).
- Connects [invisible colleges](../mechanisms/invisible_college.md) to measurable entry barriers.
- Provides stratification variables for mechanism tests in quasi-experimental field-entry designs.

## Operationalization

- Measure intellectual coherence with PMRA proximity scores among pre-event related articles.
- Measure field self-reference as the share of references in pre-event related articles that point back into the focal subfield.
- Measure social coherence with the clustering coefficient of the pre-event coauthorship network.
- Split fields at median or pre-specified thresholds and estimate entry responses separately across low- and high-coherence strata.
- Report correlations among coherence measures, because intellectual and social closure can move together.

## Evidence and Validations

- Verified full-text evidence from Azoulay, Fons-Rosen, and Graff Zivin (2019) uses PMRA proximity, within-subfield reference share, and coauthorship clustering to study entry barriers after eminent scientist deaths.
- The PMRA-based coherence measure uses the cardinal relatedness score of the 25th most related pre-death article in the subfield.
- The self-reference measure computes the fraction of references in recent pre-death related articles that fall within the same subfield.
- The social-coherence measure is the clustering coefficient in the subfield coauthorship network.
- Entry effects are consistently smaller in more coherent fields, although split-sample differences are not always statistically significant.

## Caveats

- Coherence can indicate productive cumulative organization rather than exclusionary closure.
- Median splits are easy to interpret but discard within-stratum variation.
- Content and social coherence are proxies; they do not directly observe review behavior, informal gatekeeping, or prospective entrants' expectations.

## Links

- [star-scientist entry deterrence](../mechanisms/star_scientist_entry_deterrence.md)
- [outsider entry after star death](../mechanisms/outsider_entry_after_star_death.md)
- [collaboration clustering coefficient](collaboration_clustering_coefficient.md)
- [PMRA subfield delineation](../methods/pmra_subfield_delineation.md)
- [subfield overlap audit](../validations/subfield_overlap_audit.md)
- [collaborator resource-control proxies](collaborator_resource_control_proxies.md)
- [invisible college](../mechanisms/invisible_college.md)

## References

- Azoulay, P., Fons-Rosen, C., & Graff Zivin, J. S. (2019). Does Science Advance One Funeral at a Time? *American Economic Review*, 109(8), 2889-2920. https://doi.org/10.1257/aer.20161574 [OpenAlex: W2193631239; Dimensions: pub.1120042002; WoS: unknown]

## Metadata

- Concept ID: `subfield_coherence_barrier_measures`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Azoulay et al. (2019) (2019)
- Latest seen paper: Azoulay et al. (2019) (2019)
- Primary reference DOI: `10.1257/aer.20161574`
- OpenAlex ID: `W2193631239`
- Dimensions ID: `pub.1120042002`
- SciSciNet ID: `W2193631239`
- Aliases: subfield coherence measures; intellectual coherence barrier; social coherence barrier; field closure metrics
