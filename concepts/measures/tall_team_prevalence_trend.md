# Tall-team prevalence trend

## Summary

Tall-team prevalence trend measures how the share of teams with concentrated leadership changes over time, using an L-ratio threshold to distinguish tall hierarchical teams from flatter teams.

## Canonical Form

- Unit of analysis: paper team, field-year cohort, journal-year cohort, discipline, or publication database.
- Typical representation: annual share of teams below an L-ratio threshold, cohort trend, or field-stratified hierarchy time series.
- Measurement target: whether science is becoming more internally hierarchical as teams grow and specialize.
- Empirical signature: a rising fraction of multi-author papers have less than half of team members in lead roles.

## Uses in Science of Science

- Adds an internal-structure trend to [team impact advantage](../mechanisms/team_impact_advantage.md), which otherwise tracks team prevalence and citation outcomes.
- Complements [mean team-size growth](mean_team_size_growth.md) by measuring hierarchy growth rather than author-count growth.
- Connects [team hierarchy and flatness](../mechanisms/team_hierarchy_flatness.md) to long-run concerns about [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md).
- Provides a portfolio-level indicator for funders and institutions that want larger teams without losing distributed leadership.

## Operationalization

- Define an L-ratio threshold for tall teams, such as L-ratio below 0.5.
- Estimate L-ratio for each multi-author paper through contribution statements or validated role prediction.
- Compute the annual or field-year share of papers below the threshold.
- Stratify by team size to separate hierarchy growth from raw team-size growth.
- Report changes in coverage and role-prediction model versions over time.

## Evidence and Validations

- Verified full-text evidence from Xu, Wu, and Evans (2022) defines tall teams as those with L-ratio below 0.5, where less than half of members contribute to conceptual leadership work.
- The paper reports that tall-team prevalence increased from about 50% in 1950 to about 70% in 2015.
- Xu et al. place this trend alongside growing team size and concerns about slowing expansion in new ideas, making hierarchy a candidate organizational component of stagnation debates.

## Caveats

- The threshold is substantively interpretable but still arbitrary; sensitivity to alternative thresholds should be reported.
- Historical estimates rely on imputed roles for papers without contribution statements.
- Rising tall-team share can reflect changing project scale, author norms, field mix, or database coverage, not hierarchy alone.

## Links

- [team hierarchy and flatness](../mechanisms/team_hierarchy_flatness.md)
- [lead-role ratio](lead_role_ratio.md)
- [team role-size scaling](team_role_size_scaling.md)
- [mean team-size growth](mean_team_size_growth.md)
- [team impact advantage](../mechanisms/team_impact_advantage.md)
- [team size and disruption](../mechanisms/team_size_disruption.md)
- [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md)
- [same-size team hierarchy contrast](../validations/same_size_team_hierarchy_contrast.md)
- [MAG contribution-statement linked panel](../datasets/mag_contribution_statement_linked_panel.md)

## References

- Xu, F., Wu, L., & Evans, J. A. (2022). Flat teams drive scientific innovation. *Proceedings of the National Academy of Sciences*, 119(23), e2200927119. https://doi.org/10.1073/pnas.2200927119 [OpenAlex: W4226148732; Dimensions: pub.1148413764; WoS: unknown]

## Metadata

- Concept ID: `tall_team_prevalence_trend`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Xu et al. (2022) (2022)
- Latest seen paper: Xu et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2200927119`
- OpenAlex ID: `W4226148732`
- Dimensions ID: `pub.1148413764`
- SciSciNet ID: `W4226148732`
- Aliases: tall-team share; L-ratio below 0.5 trend; hierarchy prevalence trend; conceptual-leadership concentration trend
