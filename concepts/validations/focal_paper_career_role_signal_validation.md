# Focal-paper career role signal validation

## Summary

Focal-paper career role signal validation tests whether inferred lead and support roles align with both paper-specific contribution signals and career-scale author histories.

## Canonical Form

- Unit of analysis: author-paper pair, role label, contribution statement, byline position, topic contribution, citation history, or career profile.
- Typical representation: classifier validation table, precision-recall score, predicted-versus-observed L-ratio correlation, or role-signal comparison.
- Validation target: ensure role labels capture meaningful lead/support differences rather than arbitrary contribution clusters.
- Empirical signature: lead authors differ from support authors on focal-paper tasks and cumulative career characteristics.

## Uses in Science of Science

- Deepens [lead/support role prediction validation](lead_support_role_prediction_validation.md).
- Addresses [author-order contribution proxy limits](author_order_contribution_proxy_limits.md) by combining byline signals with broader role evidence.
- Supports scalable [contributorship prediction models](../methods/contributorship_prediction_models.md).
- Links team-role inference to [scientific career impact](../mechanisms/scientific_career_impact.md).

## Operationalization

- Extract lead and support labels from contribution-statement role clusters.
- Compare role labels with first-author status, corresponding-author status, introduced references, and directed topics on the focal paper.
- Compare role labels with career age, citation impact, number of topics, and prior publications.
- Train and evaluate classifiers that predict author roles and paper-level L-ratio.
- Report precision, recall, predicted-observed correlation, and the signal families used.

## Evidence and Validations

- Verified full-text evidence from Xu, Wu, and Evans (2022) validates L-ratio by showing distinct lead and support contributions to specific papers and to science as a whole.
- Their text reports that lead authors are more likely to introduce references, direct topics, initiate research as first author, and manage communication as corresponding author, while support authors are less likely to do those tasks.
- The authors also find lead/support differences in career age, citation impact, topic breadth, and prior publications, and report classifier precision of 0.79, recall of 0.793, and predicted-versus-empirical L-ratio correlation of 0.66.

## Caveats

- Career-scale signals can encode seniority, prestige, and field differences as well as actual role.
- Contribution statements are uneven across journals and years.
- Validation against observable signals cannot fully capture hidden intellectual labor.

## Links

- [lead/support role prediction validation](lead_support_role_prediction_validation.md)
- [author-order contribution proxy limits](author_order_contribution_proxy_limits.md)
- [contributorship prediction models](../methods/contributorship_prediction_models.md)
- [scientific career impact](../mechanisms/scientific_career_impact.md)
- [team hierarchy and flatness](../mechanisms/team_hierarchy_flatness.md)
- [lead-role ratio](../measures/lead_role_ratio.md)

## References

- Xu, F., Wu, L., & Evans, J. (2022). Flat teams drive scientific innovation. *Proceedings of the National Academy of Sciences*, 119(23), e2200927119. https://doi.org/10.1073/pnas.2200927119 [OpenAlex: W4226148732; Dimensions: pub.1148413764; SciSciNet: W4226148732; WoS: unknown]

## Metadata

- Concept ID: `focal_paper_career_role_signal_validation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Xu et al. (2022) (2022)
- Latest seen paper: Xu et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2200927119`
- OpenAlex ID: `W4226148732`
- Dimensions ID: `pub.1148413764`
- SciSciNet ID: `W4226148732`
- Aliases: focal-career role validation; author role signal validation; lead-support signal validation; L-ratio role evidence
