# PMRA overexpansion cutoff check

## Summary

PMRA overexpansion cutoff check is a validation that tests whether post-event field growth is an artifact of expanding a PubMed Related Articles subfield into increasingly weakly related articles.

## Canonical Form

- Unit of analysis: PMRA-ranked article set, treated subfield, control subfield, relatedness cutoff, or post-event publication count.
- Typical representation: sensitivity curve over PMRA inclusion thresholds.
- Validation target: rule out mechanical field-boundary expansion as the reason treated subfields appear to grow.
- Empirical signature: results persist when the PMRA set is restricted to closer relatedness neighborhoods.

## Uses in Science of Science

- Strengthens [PMRA subfield delineation](../methods/pmra_subfield_delineation.md) by checking the stability of its field boundary.
- Complements [mortality event pretrend validation](mortality_event_pretrend_validation.md) by addressing a measurement artifact rather than a timing artifact.
- Supports event-study interpretations using [field-year Poisson QML](../methods/field_year_poisson_qml.md).
- Helps distinguish real field entry from looser post hoc retrieval.

## Operationalization

- Build treated and control PMRA subfields using a baseline relatedness ranking or score.
- Reestimate outcomes under stricter and looser inclusion cutoffs.
- Check whether post-event growth is concentrated in marginal, weakly related articles.
- Report whether effects persist in the high-relatedness core of the subfield.

## Evidence and Validations

- Verified full-text evidence from Azoulay et al. (2019) reports sensitivity checks around the PMRA relatedness cutoff.
- The authors test whether subfield expansion after star death mechanically includes less-related articles because the deceased scientist no longer publishes.
- Their interpretation of post-death growth depends on showing that the result is not only a boundary-expansion artifact.

## Caveats

- PMRA relatedness is proprietary and not fully transparent outside the PubMed interface.
- Stricter cutoffs can reduce recall and understate diffuse intellectual spillovers.
- Cutoff robustness does not eliminate all vocabulary or indexing changes in biomedical records.

## Links

- [PMRA subfield delineation](../methods/pmra_subfield_delineation.md)
- [mortality event pretrend validation](mortality_event_pretrend_validation.md)
- [field-year Poisson QML](../methods/field_year_poisson_qml.md)
- [star-scientist entry deterrence](../mechanisms/star_scientist_entry_deterrence.md)
- [outsider entry after star death](../mechanisms/outsider_entry_after_star_death.md)

## References

- Azoulay, P., Fons-Rosen, C., & Graff Zivin, J. S. (2019). Does science advance one funeral at a time? *American Economic Review*, 109(8), 2889-2920. https://doi.org/10.1257/aer.20161574 [OpenAlex: W2193631239; Dimensions: pub.1120042002; SciSciNet: W2193631239]

## Metadata

- Concept ID: `pmra_overexpansion_cutoff_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Azoulay et al. (2019) (2019)
- Latest seen paper: Azoulay et al. (2019) (2019)
- Primary reference DOI: `10.1257/aer.20161574`
- OpenAlex ID: `W2193631239`
- Dimensions ID: `pub.1120042002`
- SciSciNet ID: `W2193631239`
- Aliases: PMRA cutoff robustness; PMRA boundary expansion check; relatedness cutoff sensitivity; subfield overexpansion validation
