# Deceased superstar life-scientist panel

## Summary

The deceased superstar life-scientist panel is a matched biomedical field dataset built around eminent academic life scientists who died while still scientifically active, their local research subfields, collaborators, non-collaborating related authors, publications, NIH grants, citations, and control subfields.

## Canonical Form

- Unit of analysis: deceased scientist, star-linked subfield, matched control subfield, author, publication, NIH award, or field-year.
- Typical representation: event-time panel centered on premature scientist death, with treated and matched control subfields.
- Mechanism or measurement target: how the loss of a dominant scientist changes entry, publication flow, funding flow, and intellectual direction.
- Empirical signature: post-death changes in treated subfields are compared with matched control subfields that inherit counterfactual death dates.

## Uses in Science of Science

- Supplies the data layer for [superstar death event studies](../methods/superstar_death_event_study.md).
- Connects field-level entry to [PMRA subfield delineation](../methods/pmra_subfield_delineation.md), because the fields are content-defined rather than citation- or collaboration-defined.
- Allows publication and NIH-funding outcomes to be split with [collaborator/non-collaborator field flow](../measures/collaborator_noncollaborator_field_flow.md).
- Links scientist status, field topology, and entry barriers in [star-scientist entry deterrence](../mechanisms/star_scientist_entry_deterrence.md).

## Operationalization

- Start from a broad roster of academic life scientists with employment history, degree, gender, department affiliations, publications, patents, and NIH funding.
- Select scientists whose deaths occurred between 1975 and 2003 while they were still active, so post-death field output is observable.
- Define each treated subfield from articles where the star was last author in the five years before death and from PMRA-related PubMed articles.
- Construct matched control subfields and assign them the treated star's death year as the counterfactual event time.
- Match related-article author rosters to AAMC and NIH-linked records to identify collaborators, non-collaborators, demographics, employment, publications, and NIH grants.
- Audit same-star subfield overlap and author-level total output to separate field renewal from duplicate field definitions or aggregate output growth.

## Evidence and Validations

- Verified full-text evidence from Azoulay, Fons-Rosen, and Graff Zivin (2019) studies 452 eminent academic life scientists whose deaths occurred between 1975 and 2003 while they were still active.
- The paper reports that the deceased scientists are drawn from a larger pool of 12,935 life scientists with employment, degree, department, publication, patent, and NIH funding histories.
- The authors classify death circumstances as sudden, protracted illness, or unknown, and use sudden-death analyses as a stronger exogeneity check.
- Publication data come from PubMed, author identity and faculty-status data from AAMC-linked records, and funding-flow outcomes from NIH grant acknowledgments.
- The panel is explicitly designed so the star's own publications are removed from post-death counts, preventing mechanical declines from being mistaken for field contraction.

## Caveats

- The author-matching design can systematically observe U.S. medical-school faculty and NIH-funded researchers better than foreign, industrial, or nonacademic scientists.
- The sample is biomedical, so capital needs, publication norms, last-author conventions, and NIH funding traces may not transfer cleanly to all fields.
- Premature death is a powerful event design, but field-level interpretation still depends on matched control quality and pretrend checks.

## Links

- [superstar death event study](../methods/superstar_death_event_study.md)
- [PMRA subfield delineation](../methods/pmra_subfield_delineation.md)
- [matched control subfield construction](../methods/matched_control_subfield_construction.md)
- [subfield overlap audit](../validations/subfield_overlap_audit.md)
- [collaborator/non-collaborator field flow](../measures/collaborator_noncollaborator_field_flow.md)
- [mortality-event pretrend validation](../validations/mortality_event_pretrend_validation.md)
- [author-level output reallocation check](../validations/author_level_output_reallocation_check.md)
- [life-science generalizability boundary](../validations/life_science_generalizability_boundary.md)
- [outsider entry after star death](../mechanisms/outsider_entry_after_star_death.md)
- [star-scientist entry deterrence](../mechanisms/star_scientist_entry_deterrence.md)
- [NIH IMPAC R01 grant panel](nih_impac_r01_grant_panel.md)
- [MeSH keyword trajectory shift](../measures/mesh_keyword_trajectory_shift.md)

## References

- Azoulay, P., Fons-Rosen, C., & Graff Zivin, J. S. (2019). Does Science Advance One Funeral at a Time? *American Economic Review*, 109(8), 2889-2920. https://doi.org/10.1257/aer.20161574 [OpenAlex: W2193631239; Dimensions: pub.1120042002; WoS: unknown]

## Metadata

- Concept ID: `deceased_superstar_life_scientist_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Azoulay et al. (2019) (2019)
- Latest seen paper: Azoulay et al. (2019) (2019)
- Primary reference DOI: `10.1257/aer.20161574`
- OpenAlex ID: `W2193631239`
- Dimensions ID: `pub.1120042002`
- SciSciNet ID: `W2193631239`
- Aliases: deceased superstar panel; premature scientist death panel; biomedical star death panel; life-scientist mortality panel
