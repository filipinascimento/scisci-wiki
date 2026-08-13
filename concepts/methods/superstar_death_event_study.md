# Superstar death event study

## Summary

Superstar death event studies use the premature death of eminent scientists as shocks to local research fields, estimating how publication, funding, collaboration, and entry patterns change in treated subfields relative to matched control subfields.

## Canonical Form

- Unit of analysis: star-linked subfield, control subfield, field-year, collaborator group, non-collaborator group, publication, or grant.
- Typical representation: difference-in-differences or event-study panel around a scientist-death date.
- Method target: identify how dominant individuals shape the vitality and direction of nearby scientific fields.
- Empirical signature: treated and control subfields have similar pre-event trajectories but diverge after the star death.

## Uses in Science of Science

- Gives a field-level counterpart to career-shock designs focused only on the star's collaborators.
- Connects [scientific problem choice](../mechanisms/scientific_problem_choice.md) with quasi-experimental evidence on entry into intellectual neighborhoods.
- Separates social loss among collaborators from intellectual opportunity for non-collaborating related authors through [collaborator/non-collaborator field flow](../measures/collaborator_noncollaborator_field_flow.md).
- Provides a reusable design template for policy shocks, retirements, deaths, institutional closures, or sudden resource losses.

## Operationalization

- Define treated subfields around a star scientist's recent work, preferably with a method that does not use outcomes such as citation or collaboration.
- Match each treated subfield to one or more control subfields with [matched control subfield construction](matched_control_subfield_construction.md) and assign controls the treated subfield's death year as counterfactual event time.
- Estimate [field-year Poisson QML](field_year_poisson_qml.md) or other panel specifications with event-time indicators, calendar-year effects, field-age controls, subfield fixed effects, and clustered inference.
- Split outcomes by collaborators and non-collaborators, and by publication, citation-tail, reference-vintage, MeSH-vintage, and funding-flow bins.
- Validate pre-event parallel trends and probe sudden versus anticipated deaths.
- Treat anticipated deaths as a possible [intellectual estate planning](../validations/intellectual_estate_planning.md) caveat when succession by collaborators is plausible.

## Evidence and Validations

- Verified full-text evidence from Azoulay, Fons-Rosen, and Graff Zivin (2019) uses a difference-in-differences setup around the premature death of 452 eminent life scientists.
- The paper compares star-linked biomedical subfields with matched control subfields, using the common death-date term and the treatment interaction to separate generic event-time dynamics from treated-field response.
- The main model uses conditional fixed-effects Poisson QML for non-negative, skewed field-year publication and NIH-funding counts, with standard errors clustered at the star level.
- The paper reports no discernible pre-death effect in event-study graphs and similar post-death increases in non-collaborator contributions for sudden and anticipated death subsamples.
- The design supports separate mechanism pages for [outsider entry after star death](../mechanisms/outsider_entry_after_star_death.md), [star-scientist entry deterrence](../mechanisms/star_scientist_entry_deterrence.md), and [mortality-event pretrend validation](../validations/mortality_event_pretrend_validation.md).
- The anticipated-death robustness also motivates [intellectual estate planning](../validations/intellectual_estate_planning.md).

## Caveats

- Death is not randomly assigned with respect to all field dynamics, especially when illness is anticipated.
- Matched controls and pretrend evidence reduce but do not eliminate all concerns about latent field momentum.
- The event can shift who works on a topic without increasing aggregate output if entrants reallocate effort from other agendas.

## Links

- [deceased superstar life-scientist panel](../datasets/deceased_superstar_life_scientist_panel.md)
- [PMRA subfield delineation](pmra_subfield_delineation.md)
- [matched control subfield construction](matched_control_subfield_construction.md)
- [field-year Poisson QML](field_year_poisson_qml.md)
- [mortality-event pretrend validation](../validations/mortality_event_pretrend_validation.md)
- [intellectual estate planning](../validations/intellectual_estate_planning.md)
- [subfield overlap audit](../validations/subfield_overlap_audit.md)
- [collaborator/non-collaborator field flow](../measures/collaborator_noncollaborator_field_flow.md)
- [outsider entry after star death](../mechanisms/outsider_entry_after_star_death.md)
- [star-scientist entry deterrence](../mechanisms/star_scientist_entry_deterrence.md)
- [author-level output reallocation check](../validations/author_level_output_reallocation_check.md)
- [life-science generalizability boundary](../validations/life_science_generalizability_boundary.md)
- [scientific problem choice](../mechanisms/scientific_problem_choice.md)
- [scisci quasi-experimental policy evaluation](../validations/scisci_quasi_experimental_policy_evaluation.md)

## References

- Azoulay, P., Fons-Rosen, C., & Graff Zivin, J. S. (2019). Does Science Advance One Funeral at a Time? *American Economic Review*, 109(8), 2889-2920. https://doi.org/10.1257/aer.20161574 [OpenAlex: W2193631239; Dimensions: pub.1120042002; WoS: unknown]

## Metadata

- Concept ID: `superstar_death_event_study`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Azoulay et al. (2019) (2019)
- Latest seen paper: Azoulay et al. (2019) (2019)
- Primary reference DOI: `10.1257/aer.20161574`
- OpenAlex ID: `W2193631239`
- Dimensions ID: `pub.1120042002`
- SciSciNet ID: `W2193631239`
- Aliases: scientist death design; star mortality event study; Planck principle event study; field shock death design
