# Matched control subfield construction

## Summary

Matched control subfield construction builds comparison fields for a focal science shock by selecting matched source articles from similar publication contexts and then applying the same field-delineation algorithm to treated and control sources.

## Canonical Form

- Unit of analysis: treated source article, control source article, focal scientist, matched superstar, subfield, or field-year.
- Typical representation: many-to-one matched control subfields that inherit the treated event date as counterfactual event time.
- Method target: make treated and control fields comparable before the event while avoiding outcomes in the field-definition step.
- Empirical signature: treated and control fields have similar baseline stocks and pre-event trajectories before the shock.

## Uses in Science of Science

- Provides the control layer for [superstar death event studies](superstar_death_event_study.md).
- Pairs naturally with [PMRA subfield delineation](pmra_subfield_delineation.md), because the same content-based field rule can be applied to treated and control articles.
- Supports [mortality-event pretrend validation](../validations/mortality_event_pretrend_validation.md) by assigning counterfactual death years to control subfields.
- Gives a reusable design for matched controls in retirements, institutional closures, sudden funding shocks, or award eligibility changes.

## Operationalization

- Start from treated source articles, such as recent last-author articles by a deceased star scientist.
- Select candidate control source articles from the same journal and publication year whose last author is a still-living superstar.
- Use coarse exact or near-exact matching on article and scientist attributes, such as number of authors, star age, and citation level.
- Remove candidate controls that are themselves related to the treated source article to reduce spillover and overlap.
- Apply the identical subfield-construction procedure to treated and control sources, then carry the treated death year over as the control event year.

## Evidence and Validations

- Verified full-text evidence from Azoulay, Fons-Rosen, and Graff Zivin (2019) builds 31,142 control subfields for 3,076 treated subfields.
- The paper selects control source articles from the same journal and year as the treated source article, with a living superstar as last author.
- Control matching uses source-article authorship count, star age within five years, and similar citation counts.
- The authors remove control source articles related to treated source articles before applying PMRA symmetrically to treated and control sources.
- Baseline balance checks show similar cumulative publication stocks in treated and control subfields before the death event.

## Caveats

- Matching on observable publication context cannot eliminate unobserved differences in field momentum, topic promise, or institutional support.
- Control source articles can still share latent intellectual neighborhoods even after explicit PMRA spillover removal.
- The method depends on the availability of comparable source articles and star rosters in the focal domain.

## Links

- [superstar death event study](superstar_death_event_study.md)
- [PMRA subfield delineation](pmra_subfield_delineation.md)
- [deceased superstar life-scientist panel](../datasets/deceased_superstar_life_scientist_panel.md)
- [mortality-event pretrend validation](../validations/mortality_event_pretrend_validation.md)
- [subfield overlap audit](../validations/subfield_overlap_audit.md)
- [field-year Poisson QML](field_year_poisson_qml.md)

## References

- Azoulay, P., Fons-Rosen, C., & Graff Zivin, J. S. (2019). Does Science Advance One Funeral at a Time? *American Economic Review*, 109(8), 2889-2920. https://doi.org/10.1257/aer.20161574 [OpenAlex: W2193631239; Dimensions: pub.1120042002; WoS: unknown]

## Metadata

- Concept ID: `matched_control_subfield_construction`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Azoulay et al. (2019) (2019)
- Latest seen paper: Azoulay et al. (2019) (2019)
- Primary reference DOI: `10.1257/aer.20161574`
- OpenAlex ID: `W2193631239`
- Dimensions ID: `pub.1120042002`
- SciSciNet ID: `W2193631239`
- Aliases: matched control fields; counterfactual subfield construction; same-journal-year control articles; PMRA control fields
