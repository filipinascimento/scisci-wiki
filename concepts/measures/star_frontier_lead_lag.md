# Star frontier lead-lag

## Summary

Star frontier lead-lag measures whether a star scientist's recent references or topic vocabulary are newer or older than those of other authors in the same subfield.

## Canonical Form

- Unit of analysis: star scientist, subfield, reference list, MeSH term pair, publication, or event-study stratum.
- Typical representation: star-versus-field reference vintage, MeSH vintage difference, frontier lead indicator, or lagging-star split.
- Measurement target: whether the focal star is pulling a field forward, maintaining the core, or lagging the frontier at the time of exit.
- Empirical signature: post-star entry differs depending on whether the star's recent work used newer or older references and vocabulary than the rest of the subfield.

## Uses in Science of Science

- Adds a frontier-position measure to [star-scientist entry deterrence](../mechanisms/star_scientist_entry_deterrence.md).
- Extends [intellectual rejuvenation decomposition](intellectual_rejuvenation_decomposition.md) from entrant papers to the star's own pre-death position.
- Connects [MeSH keyword trajectory shift](mesh_keyword_trajectory_shift.md) and [reference-age search depth](reference_age_search_depth.md) to field leadership.
- Helps distinguish a blocking luminary from a frontier leader whose absence may reduce intellectual direction.

## Operationalization

- For star-authored and non-star subfield papers, compute reference-vintage and MeSH-vintage measures in the pre-event window.
- Compare the star's recent-vintage profile to the subfield's profile.
- Split subfields by whether the star appears frontier-leading, aligned, or lagging.
- Estimate entry and rejuvenation outcomes separately by lead-lag stratum.
- Report whether the measure uses references, MeSH terms, topics, or another content proxy.

## Evidence and Validations

- Verified full-text evidence from Azoulay, Fons-Rosen, and Graff Zivin (2019) compares star and subfield vintage patterns as part of its heterogeneity analysis.
- The paper uses reference and MeSH vintage to characterize whether stars were leading or lagging the frontier before death.
- This split tests whether outsider entry is stronger when a star's recent work was less aligned with newer field directions.
- The measure therefore complements the paper's broader intellectual, social, and resource-barrier explanations.

## Caveats

- Newer references and MeSH combinations are proxies for frontier position, not direct measures of scientific quality.
- Some foundational work legitimately uses older references.
- MeSH and reference-vintage measures are biomedical and database dependent.
- A star can lead one part of a subfield while lagging another.

## Links

- [intellectual rejuvenation decomposition](intellectual_rejuvenation_decomposition.md)
- [MeSH keyword trajectory shift](mesh_keyword_trajectory_shift.md)
- [reference-age search depth](reference_age_search_depth.md)
- [star-scientist entry deterrence](../mechanisms/star_scientist_entry_deterrence.md)
- [outsider entry after star death](../mechanisms/outsider_entry_after_star_death.md)
- [pre-death subfield momentum split](pre_death_subfield_momentum_split.md)

## References

- Azoulay, P., Fons-Rosen, C., & Graff Zivin, J. S. (2019). Does Science Advance One Funeral at a Time? *American Economic Review*, 109(8), 2889-2920. https://doi.org/10.1257/aer.20161574 [OpenAlex: W2193631239; Dimensions: pub.1120042002; WoS: unknown; SciSciNet: W2193631239]

## Metadata

- Concept ID: `star_frontier_lead_lag`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Azoulay et al. (2019) (2019)
- Latest seen paper: Azoulay et al. (2019) (2019)
- Primary reference DOI: `10.1257/aer.20161574`
- OpenAlex ID: `W2193631239`
- Dimensions ID: `pub.1120042002`
- SciSciNet ID: `W2193631239`
- Aliases: star frontier position; star reference-vintage lead-lag; luminary frontier lag; star MeSH-vintage lead-lag
