# Patent distinctiveness destabilization

## Summary

Patent distinctiveness destabilization is the validation idea that patents combining unusual USPTO subclass positions should tend to look more trajectory-breaking if a disruption measure is capturing departure from the status quo.

## Canonical Form

- Unit of analysis: patent, technology subclass, subclass combination, disruption score, or validation model.
- Typical representation: patent distinctiveness covariate, subclass-pair rarity score, CD-index coefficient, or face-validity contrast.
- Validation target: whether disruption scores align with independent signals of technological novelty or unusual recombination.
- Empirical signature: more distinctive subclass combinations are associated with more destabilizing patent outcomes.

## Uses in Science of Science

- Validates [disruption index](../measures/disruption_index.md) against a noncitation indicator of trajectory departure.
- Complements [patent importance measure divergence](patent_importance_measure_divergence.md), because distinctiveness concerns direction rather than citation volume.
- Connects patent-side novelty to [cited-work diversity](../measures/cited_work_diversity.md) and [reference popularity search](../measures/reference_popularity_search.md).
- Helps separate claim-count or predecessor-count controls from a more semantic technology-combination signal.

## Operationalization

- Classify each patent by USPTO technology classes or subclasses.
- Estimate the rarity or distinctiveness of a patent's subclass combination.
- Include distinctiveness alongside claims, predecessors, citations, issue year, and technology category.
- Check whether distinctiveness has the expected sign for destabilizing outcomes.

## Evidence and Validations

- Verified full-text evidence from Funk and Owen-Smith (2017) includes patent distinctiveness among validation and regression covariates.
- The paper links distinctive subclass combinations with more status-quo-challenging inventions.
- This motif is distinct from [patent claim-scope control](../methods/patent_claim_scope_control.md), which uses number of claims as scope rather than unusual technology combination.
- It is also distinct from CD itself because distinctiveness is an external validation signal.

## Caveats

- Subclass systems are administrative taxonomies and may not capture semantic novelty perfectly.
- Rarity can reflect classification granularity or examiner practice.
- Distinctiveness can be high for low-value or poorly integrated combinations.

## Links

- [disruption index](../measures/disruption_index.md)
- [patent importance measure divergence](patent_importance_measure_divergence.md)
- [cited-work diversity](../measures/cited_work_diversity.md)
- [reference popularity search](../measures/reference_popularity_search.md)
- [patent claim-scope control](../methods/patent_claim_scope_control.md)
- [patent disruption face-validity cases](patent_disruption_face_validity_cases.md)

## References

- Funk, R. J., & Owen-Smith, J. (2017). A dynamic network measure of technological change. *Management Science*, 63(3), 791-817. https://doi.org/10.1287/mnsc.2015.2366 [OpenAlex: W2303284028; Dimensions: pub.1064718099; SciSciNet: W2303284028; WoS: unknown]

## Metadata

- Concept ID: `patent_distinctiveness_destabilization`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Funk and Owen-Smith (2017) (2017)
- Latest seen paper: Funk and Owen-Smith (2017) (2017)
- Primary reference DOI: `10.1287/mnsc.2015.2366`
- OpenAlex ID: `W2303284028`
- Dimensions ID: `pub.1064718099`
- SciSciNet ID: `W2303284028`
- Aliases: patent subclass distinctiveness check; technological distinctiveness disruption validation; subclass-combination disruption signal; patent novelty-disruption alignment
