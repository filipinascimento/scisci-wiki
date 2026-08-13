# Team career-age structure controls

## Summary

L-ratio outcome estimates should be checked against team seniority composition by controlling mean career age and within-team career-age dispersion.

## Canonical Form

- Unit of analysis: team, author career age, L-ratio, outcome model, team size, or seniority composition.
- Typical representation: team-level career-age mean and dispersion controls.
- Mechanism, measurement, or validation target: seniority-composition robustness for flat-team effects.
- Empirical signature: L-ratio associations persist or change after mean career age and career-age dispersion enter the model.

## Uses in Science of Science

- Refines flat-team robustness validation by linking it to [within author l ratio fixed effect](within_author_l_ratio_fixed_effect.md) and [same size team hierarchy contrast](same_size_team_hierarchy_contrast.md).
- Useful as a reusable check when [lead role ratio](../measures/lead_role_ratio.md) is used in science-of-science inference.
- Creates cross-links to [career stage contributorship panel](../representations/career_stage_contributorship_panel.md) so the motif is not interpreted in isolation.

## Operationalization

- Infer author career age from first publication year.
- Compute team mean career age and standard deviation of career ages.
- Include both controls with team size and compare outcome estimates before and after adjustment.

## Evidence and Validations

- Verified local full text from Xu et al. (2022) controls for team size, mean career age, and standard deviation of career ages in L-ratio outcome regressions.
- The check separates flatness from basic seniority composition.

## Caveats

- Career age is not the same as status, mentorship role, funding power, or demographic position.
- First-publication year can be noisy for author disambiguation and career interruptions.

## Links

- [Within-author L-ratio fixed-effect comparison](within_author_l_ratio_fixed_effect.md)
- [Same-size team hierarchy contrast](same_size_team_hierarchy_contrast.md)
- [Lead-role ratio](../measures/lead_role_ratio.md)
- [Career-stage contributorship panel](../representations/career_stage_contributorship_panel.md)
- [H-index seniority benchmarks](../measures/h_index_seniority_benchmarks.md)
- [Team role-size scaling](../measures/team_role_size_scaling.md)

## References

- Xu, F., Wu, L., & Evans, J. A. (2022). Flat teams drive scientific innovation. *Proceedings of the National Academy of Sciences*, 119(23), e2200927119. https://doi.org/10.1073/pnas.2200927119 [OpenAlex: W4226148732; Dimensions: pub.1148413764; WoS: unknown]

## Metadata

- Concept ID: `team_career_age_structure_controls`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Xu et al. (2022) (2022)
- Latest seen paper: Xu et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2200927119`
- OpenAlex ID: `W4226148732`
- Dimensions ID: `pub.1148413764`
- SciSciNet ID: `W4226148732`
- Aliases: career-age controls; seniority-structure adjustment; team age-composition robustness
