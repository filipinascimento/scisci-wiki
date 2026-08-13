# Author-group retraction concentration

## Summary

Author-group retraction concentration measures how much of the retraction burden is clustered in repeat-author, repeat-lab, or repeat-research-group cases.

## Canonical Form

- Unit of analysis: author group, research lab, retracted article, retraction cause, investigation cluster, or coauthorship component.
- Typical representation: share of retractions attributable to groups above a threshold, concentration ratio, Lorenz curve, or repeat-retraction cluster count.
- Measurement target: concentration of correction events among recurrent author groups rather than isolated independent cases.
- Empirical signature: a small number of groups account for a large fraction of cause-specific retractions.

## Uses in Science of Science

- Quantifies a repeated-case mechanism behind [retraction cascades](../mechanisms/retraction_cascades.md).
- Connects [coauthorship networks](../representations/coauthorship_networks.md) to correction-system data by treating retractions as clustered events in author groups.
- Supports [misconduct detection infrastructure](../mechanisms/misconduct_detection_infrastructure.md), because investigations of one case can reveal multiple linked articles.
- Complements [misconduct retraction share](misconduct_retraction_share.md), which measures cause composition rather than concentration across author groups.

## Operationalization

- Link retracted articles to author identities, laboratories, institutions, and investigation records.
- Define author groups using exact author clusters, PI/lab labels, coauthorship components, or investigation-defined sets.
- Count retractions by cause within each group.
- Report concentration ratios such as the fraction of fraud or suspected-fraud retractions accounted for by groups with at least a stated number of retractions.
- Audit author disambiguation and group-definition sensitivity before comparing across fields or countries.

## Evidence and Validations

- Verified full-text evidence from Fang, Steen, and Casadevall (2012) reports that 38 research groups with at least five retractions accounted for 43.9% of fraud or suspected-fraud retractions in the modern biomedical literature.
- The paper also states that nearly all retracted articles by authors with 10 or more retractions were retracted because of fraud.
- Fang et al. interpret this pattern as partly arising when investigation of one fraudulent article reveals multiple additional fraudulent articles.
- This supports concentration measures alongside aggregate retraction counts.

## Caveats

- Repeat retractions can reflect detection intensity after one investigation, not only higher underlying misconduct propensity.
- Group definitions can be sensitive to author disambiguation, PI attribution, and institutional records.
- Concentration should not be used to infer guilt by association for all coauthors.

## Links

- [retraction cascades](../mechanisms/retraction_cascades.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [misconduct detection infrastructure](../mechanisms/misconduct_detection_infrastructure.md)
- [misconduct retraction share](misconduct_retraction_share.md)
- [retraction source reconciliation](../methods/retraction_source_reconciliation.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)

## References

- Fang, F. C., Steen, R. G., & Casadevall, A. (2012). Misconduct accounts for the majority of retracted scientific publications. *Proceedings of the National Academy of Sciences*, 109(42), 17028-17033. https://doi.org/10.1073/pnas.1212247109 [OpenAlex: W2097110982; Dimensions: pub.1035913875; SciSciNet: W2097110982; WoS: unknown]

## Metadata

- Concept ID: `author_group_retraction_concentration`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Fang et al. (2012) (2012)
- Latest seen paper: Fang et al. (2012) (2012)
- Primary reference DOI: `10.1073/pnas.1212247109`
- OpenAlex ID: `W2097110982`
- Dimensions ID: `pub.1035913875`
- SciSciNet ID: `W2097110982`
- Aliases: repeat-author retraction concentration; repeat-lab retraction share; retraction cluster concentration; author-group fraud concentration
