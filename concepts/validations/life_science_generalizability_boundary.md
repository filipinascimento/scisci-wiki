# Life-science generalizability boundary

## Summary

Life-science generalizability boundary records when a science-of-science finding is grounded in academic biomedical research and may change in fields with different capital needs, authorship norms, funding systems, or market signals.

## Canonical Form

- Unit of analysis: field domain, institutional regime, research modality, capital requirement, authorship norm, or external validity claim.
- Typical representation: scope condition, subgroup robustness check, or contrast between biomedical, physical-science, atomistic, and industrial research settings.
- Validation target: prevent domain-specific evidence from being generalized to all science without qualification.
- Empirical signature: the focal mechanism is plausible in one institutional setting but may weaken, reverse, or require different measures elsewhere.

## Uses in Science of Science

- Qualifies evidence from the [deceased superstar life-scientist panel](../datasets/deceased_superstar_life_scientist_panel.md).
- Provides an external-validity check for [superstar death event studies](../methods/superstar_death_event_study.md).
- Connects field-entry mechanisms to [science as a multiscale network](../representations/science_as_multiscale_network.md) because domains differ in team scale, resources, and infrastructure.
- Helps decide when to rerun motifs using fresh [Dimensions](../datasets/dimensions.md) or [OpenAlex](../datasets/openalex.md) data rather than assuming biomedical results transport.

## Operationalization

- State the domain, database, and institutional regime that generated the evidence.
- Identify scope features such as NIH funding, PubMed/MeSH indexing, last-author conventions, clinical-trial infrastructure, or expensive shared equipment.
- Run subgroup checks where a proxy for the scope feature is available.
- Flag fields where the same mechanism likely needs a different denominator, unit of analysis, or access-control measure.
- Treat cross-domain replication as a validation step, not a cosmetic extension.
- Separate field-domain scope conditions from program-design scope conditions such as [high-touch funding scalability boundary](high_touch_funding_scalability_boundary.md).

## Evidence and Validations

- Verified full-text evidence from Azoulay, Fons-Rosen, and Graff Zivin (2019) explicitly limits the study to academic life sciences.
- The paper notes that large portions of U.S. civilian public research funding are biomedical, but the setting may not represent fields such as pure mathematics, high-energy physics, or industrial research and development.
- The authors test whether clinical-trial-intensive biomedical subfields behave differently as a proxy for infrastructure-heavy science and find similar magnitudes, though with less precision.
- The conclusion warns that expensive specialized capital equipment may favor insider succession, while more atomistic fields may evolve with fewer entry frictions.
- The paper also notes that industrial research follows market signals and incentive systems different from academic biomedical science.

## Caveats

- External-validity boundaries should not be treated as dismissals of a result; they specify where replication is most needed.
- Domain labels can hide heterogeneity within fields, such as computational versus clinical work inside biomedicine.
- Fresh Dimensions or OpenAlex metadata can improve coverage, but full-text evidence is still needed for mechanism extraction.

## Links

- [deceased superstar life-scientist panel](../datasets/deceased_superstar_life_scientist_panel.md)
- [superstar death event study](../methods/superstar_death_event_study.md)
- [outsider entry after star death](../mechanisms/outsider_entry_after_star_death.md)
- [star-scientist entry deterrence](../mechanisms/star_scientist_entry_deterrence.md)
- [author-level output reallocation check](author_level_output_reallocation_check.md)
- [high-touch funding scalability boundary](high_touch_funding_scalability_boundary.md)
- [Dimensions](../datasets/dimensions.md)
- [OpenAlex](../datasets/openalex.md)

## References

- Azoulay, P., Fons-Rosen, C., & Graff Zivin, J. S. (2019). Does Science Advance One Funeral at a Time? *American Economic Review*, 109(8), 2889-2920. https://doi.org/10.1257/aer.20161574 [OpenAlex: W2193631239; Dimensions: pub.1120042002; WoS: unknown]

## Metadata

- Concept ID: `life_science_generalizability_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Azoulay et al. (2019) (2019)
- Latest seen paper: Azoulay et al. (2019) (2019)
- Primary reference DOI: `10.1257/aer.20161574`
- OpenAlex ID: `W2193631239`
- Dimensions ID: `pub.1120042002`
- SciSciNet ID: `W2193631239`
- Aliases: biomedical external-validity boundary; life-science scope condition; field-domain generalizability caveat; biomedical scope validation
